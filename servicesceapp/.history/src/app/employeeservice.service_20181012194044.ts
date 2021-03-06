import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';


// declare function require(url: string);
@Injectable()
export class EmployeeserviceService {
  
  //private _url:string = './assets/empdata.json';
  private _url:string = '../assets/empdata.json';
  constructor(private _http:Http) { }
  getEmployees(){
 
  return this._http.get(this._url)
             .pipe(map(
               (response:Response) => response.json()))
             ;
}

}
