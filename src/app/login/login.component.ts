import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit() {
  }
  constructor(private router: Router,private messageService: MessageService, private user: UserserviceService) { }
  UserData = {
    Username: '',
    Password: ''
  }
 showpassword:boolean=false;
  ondashboard() {
    
    this.user.Authentication(this.UserData).subscribe((response) => {
      alert("sucess")
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login successfully' });
      console.log(response.data);


      localStorage.setItem('username',this.UserData.Username)
      localStorage.setItem('password',this.UserData.Password)


      const loginTime = new Date().toLocaleString();
    sessionStorage.setItem('loginTime', loginTime);
      this.router.navigate(['/dashboard']);

    }, (error) => {
      alert("invalid credentials")
      console.log("invalid",error)
    })

  }
  toggle(){
    this.showpassword=!this.showpassword;
  }
}
