import {Component} from '@angular/core';
@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.css']
})

export class BodyComponent{
    titleBtnState: string;
    title: string;
    classSub: string;
    view: boolean;
    listItems: any;
    constructor(){
        this.titleBtnState = "Hide teachers";
        this.title = "Prueba";
        this.classSub = "Desarrollo OP";
        this.view = true;
        this.listItems = ["Fabian", "Vera", "Carrillo","Fabian", "Vera", "Carrillo"]
    }
    changeState(){
        this.view = !this.view;
        this.titleBtnState = (this.titleBtnState==="Hide teachers")?"View Teachers":"Hide teachers";
    }
}