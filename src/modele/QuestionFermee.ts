import { Question } from "./Question.ts";
import { TypeQuestion } from "./TypeQuestion.ts";
import { Proposition } from "./Proposition.ts";

export class QuestionFermee extends Question {
    private propositions: Proposition[]=[];
    constructor(id: number = 0, enonce: string = "") {
        super(id, TypeQuestion.Fermée, enonce);
    }
    addpropositions(proposition:Proposition){
        this.propositions.push(proposition);
    }
    getpropositions(){
        return this.propositions;
    }
    toString(): string {
        return super.toString()+" (fermée)"
    }
    toStringTraduit(): string {
        return super.toStringTraduit()+" (fermée)"
    }
}