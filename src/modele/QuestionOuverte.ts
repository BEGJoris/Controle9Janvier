import { Question } from "./Question.ts";
import { TypeQuestion } from "./TypeQuestion.ts";

export class QuestionOuverte extends Question {
    constructor(id: number = 0, enonce: string = "") {
        super(id, TypeQuestion.Ouverte, enonce);
    }
    toString(): string {
        return super.toString()+" (ouverte)"
    }
    toStringTraduit(): string {
        return super.toStringTraduit()+" (ouverte)"
    }
}