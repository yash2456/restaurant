import { Injectable } from '@angular/core';
import {PROMOTION} from '../shared/promotion'
import {Promotion} from '../shared/promoition';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { baseURL } from '../shared/baseurl';
// import { of } from 'rxjs';
import { Observable, of } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http: HttpClient,private processHttp:ProcessHTTPMsgService) { }


  // getpromotionData():Promise<Promotion[]>{
  //   // return PROMOTION;
  //   return of(PROMOTION).pipe(delay(2000)).toPromise();
  // }

  //or

  
  // getpromotionData():Observable<Promotion[]>{
  //   // return PROMOTION;
  //   return of(PROMOTION).pipe(delay(2000));
  // }

//   getPromotion(id:string):Observable<Promotion>{
// //  return PROMOTION.filter((prom) =>(prom.id === id) )[0];
// return of(PROMOTION.filter((prom) =>(prom.id === id) )[0]).pipe(delay(2000));
//   }
//   getFeaturePromotion():Observable<Promotion>{
// //index 0 means [0];
//     // return PROMOTION.filter((prom) => prom.featured)[0];
//     return of(PROMOTION.filter((prom) => prom.featured)[0]).pipe(delay(2000));
//   }

//live data calling
  getpromotionData():Observable<Promotion[]>{
    // return PROMOTION;
    // return of(PROMOTION).pipe(delay(2000));
    return this.http.get<Promotion[]>(baseURL + 'promotions').pipe(catchError(this.processHttp.handleError));
  }

  getPromotion(id:string):Observable<Promotion>{
    return this.http.get<Promotion>(baseURL + 'promotions/' + id)
    .pipe(catchError(this.processHttp.handleError));
  }
  getFeaturePromotion():Observable<Promotion>{
    return this.http.get<Promotion[]>(baseURL + 'promotions?featured=true')
    .pipe(map(promotions => promotions[0]))
    .pipe(catchError(this.processHttp.handleError));
  }

  getLogo():Observable<any[]>{
    return this.http.get<any[]>(baseURL + 'logo')
  }
}
