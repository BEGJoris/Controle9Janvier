// import { IQuestion } from "./IQuestion"
import { TypeQuestion } from "./TypeQuestion.ts"
import { reverse } from "../utils/Reverse.ts"


export abstract class Question{
    protected id: number
    protected type: TypeQuestion | null
    protected enonce: string
    constructor(id:number=0, type: TypeQuestion | null=null, enonce: string=""){
        this.id = id
        this.type = type
        this.enonce = enonce
    }
    toString(){
        return "Question n° " + this.id + " : " + this.enonce
    }
    toStringTraduit(){
        return "Question n° " + this.id + " : " + reverse(this.enonce)
    }
    // Getters et setters
    getId(): number {
        return this.id;
    }
    setId(id: number) {
        this.id = id;
    }
    getType(): TypeQuestion | null {
        return this.type;
    }
    setType(type: TypeQuestion | null) {
        this.type = type;
    }
    getEnonce(): string {
        return this.enonce;
    }
    setEnonce(enonce: string) {
        this.enonce = enonce;
    }
}