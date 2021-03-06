import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {isNullOrUndefined} from 'util';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  URL_TEST = 'http://localhost:3000/api/';
  URL_LIVE = '';

  baseUrl = this.URL_TEST;


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
      // 'Access-Control-Allow-Origin': 'http://localhost:4200'
    })
  };


  constructor(private http: HttpClient) {
  }

  // login
  login(email, password) {
    return this.http.post(this.baseUrl + 'login', {
      email,
      password
    }).toPromise();
  }

  getUnit(unitId) {
    return this.http.get(this.baseUrl + 'units/' + unitId,).toPromise();
  }

  getUserUnits() {
    return this.http.get(this.baseUrl + 'units').toPromise();
  }

  getUnitScanData(unitId) {
    return this.http.get(this.baseUrl + 'units/' + unitId + '/scans').toPromise();
  }


}
