import { Injectable } from '@angular/core';

@Injectable()
export class DataService{
    users:string[];

    constructor(){
        this.users = ['Jacek','Rima','Maja','Tigran','Staś','Kamil'];
    }

    getUsers(){
        return this.users;
    }
}