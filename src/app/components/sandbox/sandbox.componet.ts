import { Component } from '@angular/core';

@Component({
    selector:'sandbox',
    template:`
    <p>
    My birthday is {{birthday | date}}
    </p>

    <p>
    My birthday is {{birthday | date:"MM-dd-yyyy"}}
    </p>

    <p>I love {{ 'cake' | uppercase }}.</p>

    <p>Your total is {{ total | currency:"PLN":"1"}}</p>
    <p>Your total is {{ total | currency:"PLN"}}</p>
    <p>Our fee is {{ fee | percent }}.</p>

        `
})

export class SandboxComponent{
  birthday = new Date(1981,1,15);
  total:number = 500;
  fee:number = 0.23;
}