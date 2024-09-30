import View from "../view/View.js";
import Model from "../model/Model.js";
import { adatok } from "../model/adatok.js";

export default class Controller{
    constructor(){
        this.model = new Model(adatok);
        this.view = new View(this.model.getLista());
    }
}