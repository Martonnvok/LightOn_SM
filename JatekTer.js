class JatekTer {
    #db;
    #allapotLista = [];
    #meret;
    #lepes;

    constructor(db, meret, lepes) {
        this.#db = db
        this.#lepes = lepes
        this.#meret = meret
        for (let i = 0; i < meret; i++) {
            meret * meret;
            
        }


    }

    #setAllapotLista(allapotLista) {
        this.#allapotLista = allapotLista;
        let hatter = allapotLista[9];
        const ARTICLE = $("article");
        for (let index = 1; index < lista.length; index++) {
            ARTICLE = (lista[index], ARTICLE, hatter);

        }

    }

    #szomszedokKeresese(id) {
        if ( id == 0) {
            
        }
    }

    #init() {

    }

    #ellenorzes() {


    }

}

export default JatekTer;