import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f')signUpForm:NgForm;
  defaultQuestion='pet';
  answer='';
  genders=['males','females'];
  user={
    userName:'',
    email:'',
    secretQuestions:'',
    answer:'',
    gender:''
};
submitted=false;
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signUpForm.setValue({
    //   userData:{
    //     userName:suggestedName,
    //     email:''
    //   },
    //   secret: 'pet',
    //   questionAnswer:'',
    //   gender: 'male'
    // });
    this.signUpForm.form.patchValue({
      userData:{
        userName: suggestedName
      }

    });
  }
  // onSubmit(form: NgForm)
  // {
  //   console.log(form);
  // }
  onSubmit()
  {
    // console.log(this.signUpForm);
    this.submitted=true;
    this.user.userName=this.signUpForm.value.userData.userName;
    this.user.email=this.signUpForm.value.userData.email;
    this.user.answer=this.signUpForm.value.questionAnswer;
    this.user.secretQuestions=this.signUpForm.value.secret;
    this.user.gender=this.signUpForm.value.gender;
    this.signUpForm.reset();
    
  }

}
