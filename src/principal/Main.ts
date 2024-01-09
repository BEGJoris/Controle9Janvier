import { QuestionOuverte } from "../modele/QuestionOuverte.ts";
import { QuestionFermee } from "../modele/QuestionFermee.ts";
import { TypeQuestion } from "../modele/TypeQuestion.ts";
import { litChaine } from "../utils/Saisie.ts";
import { Proposition } from "../modele/Proposition.ts";


let compteurquestions=1;
const questionsOuvertes: QuestionOuverte[] = []
const questionsFermées: QuestionFermee[] = []
let type: string;
let enonce:string;
do{
    console.log("Saisie de la question n°"+compteurquestions);
    do{
        type=litChaine("Quel type de question voulez-vous saisir ? (o/f)");
    }while (type!="o" && type!="f" && type!="O" && type!="F");

    enonce=litChaine("Veuillez saisir l'énoncé de la question : ");

    if(type=="o"){
        const q1=new QuestionOuverte(compteurquestions);
        q1.setType(TypeQuestion.Ouverte);
        q1.setEnonce(enonce);
        questionsOuvertes.push(q1);
    }
    else{
        const q1=new QuestionFermee(compteurquestions);
        q1.setType(TypeQuestion.Fermée);
        q1.setEnonce(enonce);
        console.log("Combien de propositions voulez-vous saisir ?");
        let nb:number;
        do{
            nb=parseInt(litChaine(" "));
        }while (isNaN(nb));
        for(let i=0; i<nb; i++){
            let ch:string;
            ch=litChaine("Veuillez saisir la proposition "+(i+1)+" : ");
            const p=new Proposition(i+1, ch);
            q1.addpropositions(p);
            do{
                ch=litChaine("Voulez-vous une précision pour cette proposition ? (o/n) : ");
            } while (ch!="o" && ch!="n");
            if(ch=="o"){
                p.setPrecision(true);
            }
            else{
                p.setPrecision(false);
            }

        }
        questionsFermées.push(q1);
    }
    compteurquestions++;
}while (litChaine("Voulez-vous saisir une autre question ? (o/n): ")!="n");

console.log("\nVoici les questions saisies :");

for(let i=0; i<questionsOuvertes.length; i++){
    console.log(questionsOuvertes[i].toString());
}
for(let i=0; i<questionsFermées.length; i++){
    console.log(questionsFermées[i].toString());
    for(let j=0; j<questionsFermées[i].getpropositions().length; j++){
        console.log("\t"+questionsFermées[i].getpropositions()[j].toString());
    }
}


console.log("\nVoici les questions traduites :");
for(let i=0; i<questionsOuvertes.length; i++){
    console.log(questionsOuvertes[i].toStringTraduit());
}
for(let i=0; i<questionsFermées.length; i++){
    console.log(questionsFermées[i].toStringTraduit());
    for(let j=0; j<questionsFermées[i].getpropositions().length; j++){
        console.log("\t"+questionsFermées[i].getpropositions()[j].toStringTraduit());
    }
}