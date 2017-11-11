import { Component } from '@angular/core';
import { Customer } from './customer';

@Component({
    selector:'sandbox',
    template:`<h1>Hello {{ name }}</h1>
    <h4>{{ customer.name }}</h4>
    `
})

export class SandboxComponent{
    name:string = 'John Doe';
    customer:Customer;
    customers:Customer[];

    constructor(){
        this.customer = {
            id: 1,
            name: 'Jacek',
            email: 'jakis@email'
        }

        this.customers = [
            {
                id: 2,
                name: 'Rima',
                email: 'rima@email'
            },
            {
                id: 3,
                name: 'Maja',
                email: 'maja@email'
            }
        ]
    }
}