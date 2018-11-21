import { Injectable } from "@angular/core";
import { IvtHttpClientConfig } from "@ivt/http-client";
import { HttpClient } from "@angular/common/http";
import { HttpAbstractService, ServerModel } from "./http.abstract.service";
import { Config } from '../app/app.config';
import { Observable } from 'rxjs/Observable';
import { SurveyResponse } from "../models/survey/survey.model";
import { UIHttpInjector } from "./ui.http.injector";

@Injectable()
export class SurveyResponseService extends HttpAbstractService<SurveyResponse, SurveyResponseServerModel> {
    constructor(
        http: HttpClient,
        config: IvtHttpClientConfig,
        injector: UIHttpInjector
    ) {
        super(http, config, '', SurveyResponse, SurveyResponseServerModel, injector);
    }
    saveAll(surveyResponses: SurveyResponse[], applicationID: string): Observable<SurveyResponse[]> {
        this.url = Config.api.CreateOrUpdateSimpleSurveyResponses;
        return super.saveAll(surveyResponses, applicationID);
    }
    protected transformRequestBody(serverModel: SurveyResponseServerModel, associatedID: string): any {
        return {
            "applicationId": associatedID,
            "simpleSurveyResponses": serverModel
        }
    }

}

export class SurveyResponseServerModel extends ServerModel<SurveyResponse> {
    id: string;
    selectedScore: any;
    simpleSurveyQuestionId: any;

    fromClientModel(surveyResponse: SurveyResponse) {
        this.id = surveyResponse.id;
        this.simpleSurveyQuestionId = surveyResponse.question.id;
        this.selectedScore = surveyResponse.selectedScore;
    }
}