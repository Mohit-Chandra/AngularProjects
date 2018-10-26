import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


// declare function require(url: string);
@Injectable()
export class EmployeeserviceService {
  
  private _url:string = './assets/empdata.json';
  //private _url:string = '../assets/empdata.json';
  constructor(private httpClient : HttpClient) { }
  getEmployees(){
 
  return this.httpClient.get<any[]>(this._url)
             .pipe(map(
               (response) => console.log(response))
               )
             ;
}

}
