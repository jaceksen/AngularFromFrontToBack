import { Component } from '@angular/core';

@Component({
    selector:'sandbox',
    template:`
        <h1>Hello 
        <!--
        <span *ngIf="showName">{{name}}</span>
        <span *ngIf="!showName">AAAA</span>
        -->
        <span *ngIf="showName; else noName">{{name}}</span>
        <ng-template #noName>World</ng-template>
        </h1>

        <p>Hello {{ showName ? name : 'World1' }}</p>

        <hr>

        <div [ngSwitch]="greeting">
            <div *ngSwitchCase="'1'">Hello 1</div>
            <div *ngSwitchCase="'2'">Hello 2</div>
            <div *ngSwitchDefault>Default</div>
        </div>

    `
})

export class SandboxComponent{
    name:string = 'John Doe';
    showName:boolean = true;
    greeting:number = 2;
}