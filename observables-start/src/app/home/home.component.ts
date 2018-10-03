import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable,Observer, Subscription,interval } from 'rxjs';
import {map} from 'rxjs/operators';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  numObsSubscription:Subscription;
  customSubscription:Subscription;
  constructor() { }

  ngOnInit() {
    const myNumbers = interval(1000)
    .pipe((map(
     (data: number)=>{
       return data*2;
     }
    ));
    this.numObsSubscription = myNumbers.subscribe(

      (num:number)=>{
        console.log(num);
      }
    );
    const myObservable = Observable.create((observer:Observer<string>) => {
        setTimeout( () => {
          observer.next('first-package');
        },2000);
        setTimeout( () => {
          observer.next('second-package');
        },4000);
        setTimeout( () => {
          // observer.error('this doesnot work');
          observer.complete();
        },5000);
        setTimeout( () => {
          observer.next('third-package');
        },6000);
      }
    );
    this.customSubscription = myObservable.subscribe(
      (data: string)=>{
        console.log(data);},
        (error:string) =>{
          console.log(error);
        },
        () => {console.log('completed')}
    );
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.numObsSubscription.unsubscribe();
    this.numObsSubscription.unsubscribe();
    
  }

}
