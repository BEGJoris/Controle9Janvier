import { reverse } from "../utils/Reverse.ts"
export class Proposition{
    private id: number
    private texte: string
    private precision:boolean;
    public constructor(id: number = 0, texte: string = "",precision=false) {
        this.id = id
        this.texte = texte
        this.precision=precision
    }
    public getId(): number {
        return this.id;
    }
    public setId(id: number) {
        this.id = id;
    }
    public getTexte(): string {
        return this.texte;
    }
    public setTexte(texte: string) {
        this.texte = texte;
    }
    public getPrecision(): boolean {
        return this.precision;
    }
    public setPrecision(precision: boolean) {
        this.precision = precision;
    }
    public toString(){
        if(this.precision){
            return "Proposition "+this.texte+" (avec précision)";
        }
        else{
            return "Proposition "+this.texte
        }
    }
    public toStringTraduit(){
        if(this.precision){
            return "Proposition "+reverse(this.texte)+" (avec précision)"
        }
        else{
            return "Proposition "+reverse(this.texte)
        }
    }
}