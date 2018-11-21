import { IvtHttpService, IvtHttpClientConfig, APIResponse, APICode } from "@ivt/http-client";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Type } from "@ivt/http-client/module/service/base.service";
import { Observable } from "rxjs/Observable";
import { map, catchError, finalize, retryWhen, delayWhen } from "rxjs/operators";
import { LoadingController, Loading } from 'ionic-angular';
import { TranslateService } from "@ngx-translate/core";
import { ErrorObservable } from "rxjs/observable/ErrorObservable";
import { LoadingService } from "./loading.service";
import { UIHttpInjector } from "./ui.http.injector";

/**
 * This service take care of UI displaying:
 * 1. Display loading bar during request (set hiddenLoading = false to hide loading bar)
 * 2. Display Retry confirmation popup if request is failed due to network timeout ( )
 */
export class UIAwareHttpService<T> extends IvtHttpService<T> {
    constructor(
        http: HttpClient,
        url: string,
        ClassT: Type<T>,
        config: IvtHttpClientConfig,
        protected injector: UIHttpInjector
    ) {
        super(http, url, ClassT, config);
    }
    protected async showLoading(hiddenLoading?: boolean): Promise<Loading> {
        if (this.hideLoading) return null;
        let loading: Loading = null;
        try {
            loading = await this.injector.loadingService.create('msg.loading');
            loading.present();
        } catch (e) {
            console.error(e);
        }
        return loading;
    }
    protected hideLoading(promise: Promise<Loading>): void {
        promise.then(
            loading => {
                if (loading) {
                    loading.dismiss();
                }
            }
        )
    }
    private async displayRetryPopup(): Promise<boolean> {
        try {
            let msg = await this.injector.translateService.get('msg.network_disconnect_try_again').toPromise();
            return await this.injector.dialog.confirm(msg);
        } catch (e) {
            console.error(e);
            return false;
        }
    }
    protected retryPipe(attemp) {
        return attemp.pipe(
            delayWhen(
                (error: APIResponse) => {
                    return new Observable<any>(
                        observer => {
                            console.log('Retry with error ', error);
                            if (error.code != APICode.Progress && error.code != '0') {
                                observer.error(error);
                                observer.complete();
                            } else {
                                this.displayRetryPopup().then(
                                    retry => {
                                        if (retry) {
                                            observer.next(1)
                                        } else {
                                            observer.error(error);
                                        }
                                        observer.complete();
                                    }
                                )
                            }
                        }
                    );
                }
            )
        )
    }
    getAll(parentId?: string, hiddenLoading?: any): Observable<T[]> {
        let promise = this.showLoading(hiddenLoading);
        return super.getAll(parentId).pipe(
            retryWhen(
                attemp => this.retryPipe(attemp)
            ),
            finalize(
                () => this.hideLoading(promise)
            )
        )
    }
    get(id: string, hiddenLoading?: any): Observable<T> {
        let promise = this.showLoading(hiddenLoading);
        return super.get(id).pipe(
            retryWhen(
                attemp => this.retryPipe(attemp)
            ),
            finalize(
                () => this.hideLoading(promise)
            )
        );
    }
    save(item: any, hiddenLoading?: boolean, retryPopup?: boolean): Observable<T> {
        let promise = this.showLoading(hiddenLoading);
        if (retryPopup) {
            return super.save(item).pipe(
                retryWhen(
                    attemp => this.retryPipe(attemp)
                ),
                finalize(
                    () => this.hideLoading(promise)
                )
            );
        } else {
            return super.save(item).pipe(
                finalize(
                    () => this.hideLoading(promise)
                )
            );
        }

    }
    search(criteria?: any, hiddenLoading?: any): Observable<T[]> {
        let promise = this.showLoading(hiddenLoading);
        return super.search(criteria).pipe(
            retryWhen(
                attemp => this.retryPipe(attemp)
            ),
            finalize(
                () => this.hideLoading(promise)
            )
        );
    }

    delete(id: string, hiddenLoading?: any): Observable<any> {
        let promise = this.showLoading(hiddenLoading);
        return super.delete(id).pipe(
            retryWhen(
                attemp => this.retryPipe(attemp)
            ),
            finalize(
                () => this.hideLoading(promise)
            )
        );
    }
}

