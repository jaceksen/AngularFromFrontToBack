import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
    selector:'sandbox',
    template:`

        <div class="container">

        <form (submit)="onSubmit()">
            <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" [(ngModel)]="user.name" name="name"/>
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="text" class="form-control" [(ngModel)]="user.email" name="email"/>
            </div>
            <div class="form-group">
                <label>Phone</label>
                <input type="text" class="form-control" [(ngModel)]="user.phone" name="phone"/>
            </div>
            <input type="submit" class="btn btn-success" value="Submit"/>
        </form>

        <br><hr><br>


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
    user = {
        name:'',
        email:'',
        phone:''
    };

    constructor(public dataService:DataService){
        this.dataService.getUsers().subscribe(users => {
            //console.log(users);
            this.users = users;
        });
    }

    onSubmit(){
        this.dataService.addUser(this.user).subscribe(user => {
            console.log(user);
            this.users.unshift(user);
        });
    }


}