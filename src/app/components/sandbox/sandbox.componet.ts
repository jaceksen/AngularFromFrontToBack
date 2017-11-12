import { Component } from '@angular/core';

@Component({
    selector:'sandbox',
    template:`

    <button id="btn" (click)="fireEvent($event,'Hello')">Kliknij mnie</button>

    <button id="btn1" (mouseover)="fireEvent2($event)">MouseOver</button>

    <button id="btn2" (mousedown)="fireEvent3($event)">MouseDown</button>

    <br><br>

    <button id="btn3" (mouseup)="fireEvent4($event)">MouseUp</button>

    <button id="btn4" (dblclick)="fireEvent5($event)">DoubleClick</button>

    <button id="btn5" (drag)="fireEvent6($event)">Drag Event</button>

    <!--
    dragover
    -->

        `
})

export class SandboxComponent{
    fireEvent(e, greeting){
        console.log('kliknięty ' + greeting);
        console.log(e);
        console.log(e.target);
        console.log(e.target.id);
    }

    fireEvent2(e){
        console.log(e.target.id);
    }

    fireEvent3(e){
        console.log(e.target.id);
    }

    fireEvent4(e){
        console.log(e.target.id);
    }

    fireEvent5(e){
        console.log(e.target.id);
    }

    fireEvent6(e){
        console.log(e.target.id);
    }
}