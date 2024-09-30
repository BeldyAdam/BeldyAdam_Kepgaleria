export default class Kartya{
    #objektum
    szuloElem

    constructor(obj, szuloelem){
        this.#objektum = obj;
        this.szuloElem = szuloelem;
        this.kepOsszeallit();
    }

    kepOsszeallit(){
        this.szuloElem.append(`<div><img src="${this.#objektum.url}" alt="${this.#objektum.nev}"><br><p>${this.#objektum.nev}</p></div>`)
    }
}