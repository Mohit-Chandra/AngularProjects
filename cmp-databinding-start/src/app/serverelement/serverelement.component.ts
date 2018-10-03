import { Component, OnInit ,Input, 
    ViewEncapsulation, OnChanges, 
    SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked,
    AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild} 
   from '@angular/core';

@Component({
  selector: 'app-serverelement',
  templateUrl: './serverelement.component.html',
  styleUrls: ['./serverelement.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None,Native
})
export class ServerelementComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,
AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{

  // @Input('srvElement')
  @Input('srvElement') element: {type:string,name:string,content:string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph')paragraph: ElementRef;
  constructor() { 
    console.log('Constructor called');
  }
  ngOnChanges(changes:SimpleChanges){
    console.log('OnChanges called');
    console.log(changes);
  }

  ngOnInit() {
    console.log('OnInit called');
    console.log('TextContent: '+this.header.nativeElement.textContent);
    console.log('TextContent of Paragraph: '+this.paragraph.nativeElement.textContent);

  }
  ngDoCheck() {
    //Called every time that the input properties of a component or a directive are checked. 
    //Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log('DoCheck called');
    
  }
  ngAfterContentInit()
  {
    console.log('ngAfterOninit Called');
    console.log('TextContent of Paragraph: '+this.paragraph.nativeElement.textContent);
  }
  
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called');
  }
  ngAfterViewInit()
  {
    console.log('ngAfterViewInit called');
    console.log('TextContent: '+this.header.nativeElement.textContent);
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked Called");
  }
  ngOnDestroy()
  {
    console.log('ngOnDestroy called');
  }
}
