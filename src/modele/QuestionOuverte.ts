import { Question } from "./Question.ts";
import { TypeQuestion } from "./TypeQuestion.ts";

export class QuestionOuverte extends Question {
    public constructor(id: number = 0, enonce: string = "") {
        super(id, TypeQuestion.Ouverte, enonce);
    }
    public toString(): string {
        return super.toString()+" (ouverte)"
    }
    public toStringTraduit(): string {
        return super.toStringTraduit()+" (ouverte)"
    }
}