import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { UsertableService } from '../usertable.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  userobj={
    Username:"",
    Password:"",
    Email:"",
    Role:"",
    mobile:"",
    rPassword:""
   }
   constructor(private user:UsertableService, private router: Router){}
   save(){
    console.log(this.userobj)
    this.user.postFormData(this.userobj).subscribe(
      response => {
        
        console.log('Form data submitted successfully:', response);
        alert('added sucessfully')
        this.reset1();
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Error submitting form data:', error);
      }
      
    );
   }
   reset1(){
  
    this.userobj.Username=""
    this.userobj.Password=""
    this.userobj.Email=""
    this.userobj.Role=""
    this.userobj.mobile=""
  }
}
