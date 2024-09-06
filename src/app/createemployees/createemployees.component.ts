import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createemployees',
  templateUrl: './createemployees.component.html',
  styleUrls: ['./createemployees.component.css']
})
export class CreateemployeesComponent {
  loginTime:any;
 employeeobj:any={
  
  Username:"",
  Department:"",
  Position:"",
  mobile:""
 }
 constructor(private service: UserService,private router:Router) { 
  this.loginTime = sessionStorage.getItem('loginTime');
 }
 save(){
  console.log(this.employeeobj)
  this.service.postFormData(this.employeeobj).subscribe(
    response => {
      
      console.log('Form data submitted successfully:', response);
      alert('employee added sucessfully')
      this.reset1();
    },
    error => {
      console.error('Error submitting form data:', error);
    }
    
  );
 }
 reset1(){
  
  this.employeeobj.Username=""
  this.employeeobj.Department=""
  this.employeeobj.Position=""
  this.employeeobj.mobile=""
}
 
logout(){
  this.router.navigate(['/login'])
  localStorage.clear()
  }


}
