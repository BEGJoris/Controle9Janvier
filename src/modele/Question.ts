import { TypeQuestion } from "./TypeQuestion.ts"
import { reverse } from "../utils/Reverse.ts"
export abstract class Question{
    protected id: number
    protected type: TypeQuestion | null
    protected enonce: string
    protected constructor(id:number=0, type: TypeQuestion | null=null, enonce: string=""){
        this.id = id
        this.type = type
        this.enonce = enonce
    }
    public toString(){
        return "Question n° " + this.id + " : " + this.enonce
    }
    public toStringTraduit(){
        return "Question n° " + this.id + " : " + reverse(this.enonce)
    }
    public getId(): number {
        return this.id;
    }
    public setId(id: number) {
        this.id = id;
    }
    public getType(): TypeQuestion | null {
        return this.type;
    }
    public setType(type: TypeQuestion | null) {
        this.type = type;
    }
    public getEnonce(): string {
        return this.enonce;
    }
    public setEnonce(enonce: string) {
        this.enonce = enonce;
    }
}