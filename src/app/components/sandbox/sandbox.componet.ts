import { Component } from '@angular/core';

@Component({
    selector:'sandbox',
    template:`
        {{ people }}

        <ul>
            <li *ngFor="let person of people; let i = index">
            {{person}}.{{i+1}}
            </li>
        </ul>
        <ul>
        <li *ngFor="let person of people2; let i = index">
        {{person.firstName}} {{person.lastName}}
        </li>
    </ul>
    `
})

export class SandboxComponent{
    name:string='aaa';

    people = ['Rick', 'Daryl', 'Carl', 'Glen'];

    people2=[
        {
            firstName: 'Jacek',
            lastName: 'Seń'
        },
        {
            firstName: 'Rima',
            lastName: 'Avetyan'
        },
        {
            firstName: 'Maja',
            lastName: 'Seń'
        }
    ];

    constructor(){
        this.people[2] = 'JJJJJJJ';
        this.people2[0].firstName = 'JACEK';
    }
}