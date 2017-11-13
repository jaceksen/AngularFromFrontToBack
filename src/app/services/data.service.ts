import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService{
    data: Observable<Array<number>>;

    constructor(){        
    }

    getData(){
       this.data = new Observable(obsrver => {
            setTimeout(() => {
                obsrver.next(1);
            },1000);

            setTimeout(() => {
                obsrver.next(2);
            },2000);

            setTimeout(() => {
                obsrver.next(3);
            },3000);

            setTimeout(() => {
                obsrver.next('Hello');
            },4000);

            setTimeout(() => {
                obsrver.complete();
            },5000);
       });

       return this.data;
    }

}