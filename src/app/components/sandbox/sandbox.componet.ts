import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
    selector:'sandbox',
    template:`

        <div class="container">
        <div *ngFor="let user of users">
            <div class="well">
                <ul class="list-group">
                    <li class="list-group-item list-group-item-success">Name: {{user.name}}</li>
                    <li class="list-group-item list-group-item-success">Email: {{user.email}}</li>
                    <li class="list-group-item list-group-item-warning">Phone: {{user.phone}}</li>
                </ul>
            </div>
            <br>
        </div>
        </div>

        `
})

export class SandboxComponent{

    users:any[];

    constructor(public dataService:DataService){
        this.dataService.getUsers().subscribe(users => {
            //console.log(users);
            this.users = users;
        });
    }


}