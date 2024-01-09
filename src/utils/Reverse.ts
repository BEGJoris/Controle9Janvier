export function reverse(chaine:string){
    let chaine2= "";
    for(let i = chaine.length-1; i>=0; i--){
        chaine2 += chaine[i];
    }
    return chaine2;
}