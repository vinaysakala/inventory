import { Component, OnInit } from '@angular/core';

import { UsertableService } from '../usertable.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
   
    userdata:any;
   loginTime:any;


   userToUpdate: any = {}; 
   showForm: boolean = false;
   showData: boolean = true;
    constructor(private us:UsertableService,private router:Router){
     
    }
    ngOnInit(): void {
      this.loginTime = sessionStorage.getItem('loginTime');
      this.getData();
      
      
    }
    getData(){
      this.us.getData().subscribe((result)=>{
      this.userdata=result;
      
      

      }
  
      )
    }
    delete(id:any){
      this.us.deleteDocument(id).subscribe(
        (resp)=>{
          // console.log(resp)
          this.getData()
        },
        (err)=>{
          console.log(err)
        }
      )
      
  }

  populateUsreData(product: any) {
    this.userToUpdate = { ...product };
    this.showForm = true;
    this.showData = false;
  }

  updateUser(  ) {
    console.log('Updating user:', this.userToUpdate);
    this.us.updateUser(this.userToUpdate._id, this.userToUpdate).subscribe(
      (response) => {
        console.log('user updated successfully:', response);
        alert("user updated successfully")
        this.getData();
        this.userToUpdate = {};
      },
      (error) => {
        console.error('Error occurred while updating user:', error);
        
      }
    );
    this.showData = true;
    this.showForm = false;
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login'])
    
  }
}
