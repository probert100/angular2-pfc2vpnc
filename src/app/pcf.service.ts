import {Injectable, Inject} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {Vpnc} from './vpnc'

@Injectable()
export class PcfService {

  //private backEndUrl = 'api/comments';
  message = 'you got mail ';

  constructor (private http: Http, @Inject('url') private backEndUrl) {
    this.message = this.message+this.backEndUrl;
  }


  postPassword(password:string): Observable<string>{
    var postBody = {decrypt: password};
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.backEndUrl, postBody)
      .map(this.extractData)
      .catch(this.handleError);
  }



  private extractData(res: Response) {
    return res.text();
  }


  private handleError (error: Response | any) {
    console.log(error);
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }


}


