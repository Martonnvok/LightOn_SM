class Lampa{
    #allapot;
    #id
    #szuloElem
    constructor(id, szuloElem){
        this.#id = id;
        this.#szuloElem = szuloElem;
        szuloElem.append(`<div id= ${id}>${allapot}</div>`);
    }

    setAllapot(allapot){
        this.#allapot = allapot;
        if (allapot == 1) {
            
        }
    }

    #szinBeallit(){

    }

    #kattintasTrigger(){
        
    }


    #divElem(){

    }
}

export default Lampa;