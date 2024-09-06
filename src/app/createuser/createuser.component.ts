import { Component } from '@angular/core';
import { UsertableService } from '../usertable.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent {
  loginTime:any;
   userobj={
    Username:"",
    Password:"",
    Email:"",
    Role:"",
    mobile:""
    
   }

   constructor(private us:UsertableService,private router:Router){
    this.loginTime = sessionStorage.getItem('loginTime');
   }
   save(){
    console.log(this.userobj)
    this.us.postFormData(this.userobj).subscribe(
      response => {
        
        console.log('Form data submitted successfully:', response);
        alert('added sucessfully')
        this.reset1();
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
  logout(){
    this.router.navigate(['/login'])
    localStorage.clear()
    }

}
