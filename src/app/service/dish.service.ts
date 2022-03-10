import { Injectable } from '@angular/core';
import { DISHES } from '../shared/dishes';
import {dish} from '../shared/dish';
import { promise } from 'protractor';
import { resolve } from 'dns';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import  { HttpClient, HttpHeaders} from '@angular/common/http';
import { baseURL } from '../shared/baseurl';

import { catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http: HttpClient,private processHttp:ProcessHTTPMsgService) { }
//   getFetchData():dish[]{
//     return DISHES;
//   }

//   getDish(id:string):dish{
//  return DISHES.filter((dish) =>(dish.id === id) )[0];
//   }
//   getFeatureedDish():dish{
// //index 0 means [0];
//     return DISHES.filter((dish) => dish.featured)[0];
//   }

// getFetchData(): Promise<dish[]> {
//     // return Promise.resolve(DISHES);    1 rite 
//     return new Promise(res => {
//      // simulate server latency with 2 second delay   1 rite 
//       setTimeout(() => res(DISHES),2000)
//     });
//   }

  // getDish(id: string): Promise<dish> {
  //   return new Promise(res => {
  //    // simulate server latency with 2 second delay 1 rite 
  //      setTimeout(() => res(DISHES.filter((dish) => (dish.id === id))[0]),2000)
  //    });
  //  // return Promise.resolve(DISHES.filter((dish) => (dish.id === id))[0]); 1 rite 
  // }

  // getFeatureedDish(): Promise<dish> {
  //   return new Promise(res => {
  //     // simulate server latency with 2 second delay    1 rite
  //      setTimeout(() => res(DISHES.filter((dish) => dish.featured)[0]),2000)
  //    });
  //  // return Promise.resolve(DISHES.filter((dish) => dish.featured)[0]);  1 rite
 
  // }

  // getDishIds(): Observable<string[] | any> {
  //   return of(DISHES.map(dish => dish.id ));
  // }


  // json-server call thaya tyare


  getFetchData(): Observable<dish[]> {
    return this.http.get<dish[]>(baseURL + 'dishes')
    .pipe(catchError(this.processHttp.handleError));
  }

  getDish(id: number): Observable<dish> {
    return this.http.get<dish>(baseURL + 'dishes/' + id)
    .pipe(catchError(this.processHttp.handleError));
  }

  getFeatureedDish(): Observable<dish> {
    return this.http.get<dish[]>(baseURL + 'dishes?featured=true').pipe(map(dishes => dishes[0]))
    .pipe(catchError(this.processHttp.handleError));
  }

  getDishIds(): Observable<number[] | any> {
    return this.getFetchData().pipe(map(dishes => dishes.map(dish => dish.id)))
    .pipe(catchError(error => error));
  }
  putDish(dish: dish): Observable<dish> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.put<dish>(baseURL + 'dishes/' + dish.id, dish, httpOptions)
      .pipe(catchError(this.processHttp.handleError));

  }
}
