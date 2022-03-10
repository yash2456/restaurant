import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {leader} from '../shared/leader'
import {LEADER} from '../shared/leaders';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { baseURL } from '../shared/baseurl';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {
  constructor(private http: HttpClient,private processHttp:ProcessHTTPMsgService) { }

//   getLeaderData():leader[]{
//     return LEADER;
//   }

//   getLeader(id:string):leader{
//  return LEADER.filter((lede) =>(lede.id === id) )[0];
//   }
  // getFeatureLeader():leader{
  //   //index 0 means [0];
  //       return LEADER.filter((lede) => lede.featured)[0];
  //     }

  // live data call ing
getLeaderData():Observable<leader[]>{
  return this.http.get<leader[]>(baseURL + 'leadership' ).pipe(catchError(this.processHttp.handleError));
     
  // return LEADER;
    }
    getLeader(id:string):Observable<leader[]>{
      return this.http.get<leader[]>(baseURL + 'leadership/' + id)
      .pipe(catchError(this.processHttp.handleError));
  
    }
    getFeatureLeader():Observable<leader>{
      //index 0 means [0];
      return this.http.get<leader[]>(baseURL + 'leadership?featured=true').pipe(map(lede => lede[0]))
    .pipe(catchError(this.processHttp.handleError));
        
        }


}