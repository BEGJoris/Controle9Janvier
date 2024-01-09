import { reverse } from "../utils/Reverse.ts"
export class Proposition{
    private id: number
    private texte: string
    private precision:boolean;
    constructor(id: number = 0, texte: string = "",precision=false) {
        this.id = id
        this.texte = texte
        this.precision=precision
    }

    // Getters et setters
    getId(): number {
        return this.id;
    }
    setId(id: number) {
        this.id = id;
    }
    getTexte(): string {
        return this.texte;
    }
    setTexte(texte: string) {
        this.texte = texte;
    }
    getPrecision(): boolean {
        return this.precision;
    }
    setPrecision(precision: boolean) {
        this.precision = precision;
    }
    toString(){
        if(this.precision){
            return "Proposition "+this.texte+" (avec précision)";
        }
        else{
            return "Proposition "+this.texte
        }
    }
    toStringTraduit(){
        if(this.precision){
            return "Proposition "+reverse(this.texte)+" (avec précision)"
        }
        else{
            return "Proposition "+reverse(this.texte)
        }
    }
}