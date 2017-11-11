import { Component } from '@angular/core';

@Component({
    selector:'sandbox',
    template:`<h1>{{ name }} is {{ age }}</h1>
    <h2>{{person.firstName}} {{person.lastName}}</h2>
    <ul>
        <li>{{ 'Ala ma kota' }}</li>
        <li>{{ 1 + 1 }}</li>
        <li>{{ showAge() }}</li>
    </ul>
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