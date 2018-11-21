export class SurveyQuestion {
    id: string;
    title: string;
    maxScore: number;
    response: SurveyResponse;
}

export class SurveyResponse {
    id: string;
    question: SurveyQuestion;
    selectedScore: number;
}