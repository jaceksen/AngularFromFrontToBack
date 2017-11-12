import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
    selector:'sandbox',
    template:`

        <ul class="list-group">
            <li class="list-group-item" *ngFor="let user of users">{{user}}</li>
        </ul>

        `
})

export class SandboxComponent{

    users:string[];

    constructor(public dataService:DataService){
        console.log(this.dataService.getUsers());
        this.users = this.dataService.getUsers();
    }


}