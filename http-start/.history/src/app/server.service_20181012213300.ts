import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { map, catchError }  from 'rxjs/operators';
import { throwError } from "rxjs";
@Injectable()
export class ServerService{
    constructor(private http:Http){

    }

    storeServers(servers:any[])
    {
        const header = new Headers({'Content-Type':'application/json'});
    //    return this.http.post('https://http-f7b4a.firebaseio.com/data.json',servers,
    //    {headers: header});
       return this.http.put('https://http-f7b4a.firebaseio.com/data.json',servers,
       {headers: header});
    }

    getServers(){
        return this.http.get('https://http-f7b4a.firebaseio.com/data.json')
        //return this.http.get('https://http-f7b4a.firebaseio.com')//for generating errors
        .pipe(map(
            (response:Response) => {
                const data = response.json();
                for(const server of data){
                    server.name = 'FETCHED'+ " " +server.name;
                }
                return data;
            }
        ))
        .pipe(catchError( error => {
                console.log(error);
                return throwError('Something went wrong');
        }));
    }

    getAppName()
    {
      return this.http.get('https://http-f7b4a.firebaseio.com/appName.json')
      .pipe(map(
          (response: Response) => {
              response.json();
          }
      ));
    }



}