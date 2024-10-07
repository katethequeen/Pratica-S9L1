var User = /** @class */ (function () {
    function User(_nome, _cognome) {
        this.credito = 0;
        this.numeroChiamate = 0;
        this.nome = _nome;
        this.cognome = _cognome;
    }
    User.prototype.ricarica = function (ammontare) {
        this.credito += ammontare;
    };
    User.prototype.chiamata = function (minutiPassati) {
        var costoChiamata = minutiPassati * 0.2;
        if (this.credito >= costoChiamata) {
            this.credito -= costoChiamata;
            this.numeroChiamate++;
        }
        else {
            console.log("Credito insufficiente!");
        }
    };
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    Object.defineProperty(User.prototype, "chiama404", {
        get: function () {
            return this.credito;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getNumeroChiamata", {
        get: function () {
            return this.numeroChiamate;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var newUser = new User("Mario", "Rossi");
newUser.ricarica(20);
newUser.chiamata(6);
newUser.chiamata(2);
newUser.chiamata(1);
newUser.chiamata(5);
console.log(newUser.chiama404);
console.log(newUser.getNumeroChiamata);
