import { Injectable } from "@angular/core";
import { IvtHttpClientConfig } from "@ivt/http-client";
import { HttpClient } from "@angular/common/http";
import { HttpAbstractService, ServerModel } from "./http.abstract.service";
import { Config } from '../app/app.config';
import { Observable } from 'rxjs/Observable';
import { SurveyResponse, SurveyQuestion } from "../models/survey/survey.model";
import { UIHttpInjector } from "./ui.http.injector";

@Injectable()
export class SurveyQuestionService extends HttpAbstractService<SurveyQuestion, SurveyQuestionServerModel> {
    constructor(
        http: HttpClient,
        config: IvtHttpClientConfig,
        injector: UIHttpInjector
    ) {
        super(http, config, '', SurveyQuestion, SurveyQuestionServerModel, injector);
    }
    search(applicationID: string): Observable<SurveyQuestion[]> {
        this.url = Config.api.GetSimpleSurveyQuestionsAndResponses;
        return super.search({ applicationId: applicationID });
    }

}

export class SurveyQuestionServerModel extends ServerModel<SurveyQuestion> {
    simpleSurveyQuestionId: string;
    questionTitle: string;
    maxScore: number;
    selectedScore: number;


    fromClientModel(surveyQuestion: SurveyQuestion) {
    }
    toClientModel(): SurveyQuestion {
        const surveyQuestion = new SurveyQuestion();
        surveyQuestion.id = this.simpleSurveyQuestionId;
        surveyQuestion.title = this.questionTitle;
        surveyQuestion.maxScore = this.maxScore;
        const response = new SurveyResponse();
        response.selectedScore = this.selectedScore;
        response.question = surveyQuestion;
        surveyQuestion.response = response;
        return surveyQuestion;
    }
}