import { IvtHttpClientConfig, APIResponse, APICode } from "@ivt/http-client";
import { HttpClient } from "@angular/common/http";
import { Type } from "@ivt/http-client/module/service/base.service";
import { plainToClass, Exclude } from "class-transformer";
import { Observable } from "rxjs/Observable";
import { map, catchError, finalize } from "rxjs/operators";
import { UIAwareHttpService } from "./ui.aware.http.service";
import { UIHttpInjector } from "./ui.http.injector";

/**
 * This class extends @UIAwareHttpService
 * Use this as base class if you want to convert between Client model and Server model
 * 
 * @T: Client Model
 * @S: Server Model
 * 
 */
export class HttpAbstractService<T, S extends ServerModelIf<T>> extends UIAwareHttpService<T> {
    constructor(
        http: HttpClient,
        config: IvtHttpClientConfig,
        url: string,
        ClassT: Type<T>,
        private ClassV: Type<S>,
        injector: UIHttpInjector
    ) {
        super(http, url, ClassT, config, injector);
    }

    save(t: T, hiddenLoading?: any): Observable<T> {
        let vInstance = new this.ClassV();
        vInstance.fromClientModel(t);
        vInstance = this.transformEntity(vInstance, t);
        return super.save(vInstance);
    }
    /**
     * 
     * @param tList 
     * @param associatedID 
     * Save a list of entities to server. 
     * You should overwrite transformRequestBody() if you want to customize request payload otherwise only list of entities are submitted
     */
    saveAll(tList: T[], associatedID?: string, hiddenLoading?: any): Observable<T[]> {
        let promise = this.showLoading(hiddenLoading);
        let vList = tList.map(_t => {
            let vInstance = new this.ClassV();
            vInstance.fromClientModel(_t);
            vInstance = this.transformEntity(vInstance, _t);
            return vInstance;
        });
        let payload = this.transformRequestBody(vList, associatedID);
        return this.httpClient.post<APIResponse>(this.url, payload)
            .pipe(
                map(
                    res => this.extractData(res)
                ),
                catchError(
                    err => {
                        console.error(err);
                        return Observable.throw(err);
                    }
                ),
                finalize(
                    () => {
                        this.hideLoading(promise);
                    }
                )
            )
    }

    /**
     * To process more with V instance before requesting API.
     */
    protected transformEntity(serverModel: S, clientModel: T): S {
        return serverModel;
    }

    /**
     * 
     * @param entityOrEntities 
     * @param associatedID 
     * To transform request body before requesting API
     */
    protected transformRequestBody(entityOrEntities: S | S[], associatedID?: string): any {
        return entityOrEntities;
    }

    extractData(res: APIResponse): T | T[] {
        const response = <APIResponse>(res);
        let results: any;
        if (response.code === APICode.Success) {
            if (response.data instanceof Array) {
                results = plainToClass<S, S[]>(this.ClassV, response.data);
                if (results) {
                    results = results.map(_serverModel => {
                        return _serverModel.toClientModel();
                    });
                }
            } else {
                results = plainToClass<S, S>(this.ClassV, response.data)
                if (results) {
                    results = results.toClientModel();
                }
            }
        } else {
            results = super.extractData(res);
        }
        return results;
    }
}
export interface ServerModelIf<T> {
    toClientModel(): T;
    fromClientModel(t: T);
}
export class ServerModel<T> implements ServerModelIf<T> {
    @Exclude()
    toClientModel(): T {
        throw new Error("Method not implemented.");
    }
    @Exclude()
    fromClientModel(t: T) {
        throw new Error("Method not implemented.");
    }
}