export function litChaine(msg = ""): string {
    let ch: string | null;
    do {
      ch = prompt(msg === "" ? "Veuillez saisir une chaîne quelconque : " : msg);
    } while (ch === null);
    return ch;
  }
  