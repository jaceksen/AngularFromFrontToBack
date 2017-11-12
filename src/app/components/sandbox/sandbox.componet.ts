import { Component } from '@angular/core';

@Component({
    selector:'sandbox',
    template:`

    <button (click)="changeValue()">ChangeValue</button>
    <br><br>

    <h1> {{ text }}</h1>

    <div *ngIf="value">
        <h1>Tralalala</h1>
    </div>

        `
})

export class SandboxComponent{

    text:string='Hello World';
    value:boolean=true;

    changeValue(){
        this.text = 'Goodbye World';
        //za pomocą ifów
        // if(this.value){
        //     this.value = false;
        // } else {
        //     this.value = true;
        // }
        //lub inny sposób
        //ustawia zawsze na przeciwną wartość
        this.value = !this.value;
    }
}