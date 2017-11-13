import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//chcemy to zo zostanie zwrócone z netu zamoapować na jsona
import 'rxjs/add/operator/map';

@Injectable()
export class DataService{

    constructor(public http:Http){        
    }

    getUsers(){
        return this.http.get('https://jsonplaceholder.typicode.com/users')
            .map(res => res.json());
    }

}