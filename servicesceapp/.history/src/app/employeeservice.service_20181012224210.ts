import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { map } from 'rxjs/operators';
import{HttpClientModule} from '@angular/common/http';


// declare function require(url: string);
@Injectable()
export class EmployeeserviceService {
  
  //private _url:string = './assets/empdata.json';
  private _url:string = '../assets/empdata.json';
  constructor(private _httpClient:HttpClient) { }
  getEmployees(){
 
  return this._httpClient.get(this._url)
             .pipe(map(
               (response:Response) => response.json())
               )
             ;
}

}
