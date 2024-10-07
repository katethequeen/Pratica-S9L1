interface Smartphone {
  credito: number;
  numeroChiamate: number;

  //Metodi
  ricarica(ammontare: number): void;
  chiamata(minutiPassati: number): void;
  get chiama404(): number;
  get getNumeroChiamata(): number;
  azzeraChiamate(): void;
}

class User implements Smartphone {
  nome: string;
  cognome: string;
  credito: number = 0;
  numeroChiamate: number = 0;

  constructor(_nome: string, _cognome: string) {
    this.nome = _nome;
    this.cognome = _cognome;
  }

  ricarica(ammontare: number): void {
    this.credito += ammontare;
  }
  chiamata(minutiPassati: number): void {
    let costoChiamata = minutiPassati * 0.2;
    if (this.credito >= costoChiamata) {
      this.credito -= costoChiamata;
      this.numeroChiamate++;
    } else {
      console.log("Credito insufficiente!");
    }
  }
  azzeraChiamate(): void {
    this.numeroChiamate = 0;
  }
  get chiama404() {
    return this.credito;
  }
  get getNumeroChiamata() {
    return this.numeroChiamate;
  }
}

let newUser = new User("Mario", "Rossi");
newUser.ricarica(20);
newUser.chiamata(6);
newUser.chiamata(2);
newUser.chiamata(1);
newUser.chiamata(5);
console.log(newUser.chiama404);
console.log(newUser.getNumeroChiamata);
