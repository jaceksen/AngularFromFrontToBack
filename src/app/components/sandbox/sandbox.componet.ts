import { Component } from '@angular/core';

@Component({
    selector:'sandbox',
    template:`

        <input it="txt1" type="text" (keyup)="fireEvent($event)" placeholder="key up">

        <br><br>

        <div> 
        <input type="text" (keyup)="changeText($event)" placeholder="key up event">
        </div>

        <br><br>
        <h2>{{ text }}</h2>

        <br><br>
        
        <div> 
        <input type="text" (keyup)="changeText2($event)" placeholder="key up event 2 way" value={{text2}}>
        </div>
        
       <br><br>
        <h2>{{ text2 }}</h2>

        `
})

// keydown
// focus
// blur - kiedy jeste w danym polu w formatce i kliknę gdzie indziej
// cut
// copy
// paste

export class SandboxComponent{
    
    text:string="one way";
    text2:string="two way";

    fireEvent(e){
        console.log('keyUp');
    }

    //one way data bindig
    changeText(e){
        this.text = e.target.value;
    }

    //two way data binding
    changeText2(m){
        this.text2 = m.target.value;
    }
}