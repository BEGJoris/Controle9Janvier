import { Question } from "./Question.ts";
import { TypeQuestion } from "./TypeQuestion.ts";
import { Proposition } from "./Proposition.ts";

export class QuestionFermee extends Question {
    private propositions: Proposition[]=[];
    public constructor(id: number = 0, enonce: string = "") {
        super(id, TypeQuestion.Fermée, enonce);
    }
    public addpropositions(proposition:Proposition){
        this.propositions.push(proposition);
    }
    public getpropositions(){
        return this.propositions;
    }
    public toString(): string {
        return super.toString()+" (fermée)"
    }
    public toStringTraduit(): string {
        return super.toStringTraduit()+" (fermée)"
    }
}