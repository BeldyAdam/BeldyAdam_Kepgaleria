export default class Model{
    #lista = [];

    constructor(lista){
        this.#lista = lista;
        this.getLista();
    }

    getLista(){
        return this.#lista;
    };
}