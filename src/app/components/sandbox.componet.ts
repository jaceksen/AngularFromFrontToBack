import { Component } from '@angular/core';

@Component({
    selector:'sandbox',
    template:`<h1>Hello</h1>
    `
})

export class SandboxComponent{
    name = 'John Doe';
    age = 35;
    person = {
        firstName:'Steve',
        lastName:'Smith'
    }

    constructor(){
        console.log('Konstruktor');
        this.person.firstName='Jacek';
        this.hasBirthday();
    }

    hasBirthday(){
        this.age += 1;
    }

    showAge(){
        return this.age;
    }
}