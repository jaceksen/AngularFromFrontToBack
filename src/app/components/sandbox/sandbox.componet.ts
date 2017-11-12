import { Component } from '@angular/core';

@Component({
    selector:'sandbox',
    template:`

        <div class="container">

        <form (submit)="onSubmit()">
         <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" [(ngModel)]="name" name="name">
         </div>
         <input type="submit" class="btn btn-success" value="Submit">
         </form>
         <hr>
         <ul class="list-group">
            <li class="list-group-item" *ngFor="let user of users">{{ user }}</li>
        </ul>
         </div>

        `
})

export class SandboxComponent{

    name:string;
    users:string[] = ['Jacek Seń','Rima Avetyan','Maja Seń'];

    onSubmit(){
        console.log(this.name);
        this.users.push(this.name);
        this.name='';
    }

}