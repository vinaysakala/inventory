import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  data:any;
   loginTime:any;
   employeeToUpdate: any = {}; 
  showForm: boolean = false;
  showData: boolean = true;

  constructor(private user: UserService,private router:Router) {
    
  }

  ngOnInit() {
    this.loginTime = sessionStorage.getItem('loginTime');
    this.getdata();
    
  }

  getdata(){
    this.user.getData().subscribe((result) => {
      this.data = result;
      console.log(this.data);
      
    });
  }
  delete(id:any){
      this.user.deleteDocument(id).subscribe(
        (resp)=>{
          // console.log(resp)
          this.getdata()
        },
        (err)=>{
          console.log(err)
        }
      )
      
  }

  populateProductData(product: any) {
    this.employeeToUpdate = { ...product };
    this.showForm = true;
    this.showData = false;
  }

  updateEmployee(  ) {
    console.log('Updating employee:', this.employeeToUpdate);
    this.user.updateemployee(this.employeeToUpdate._id, this.employeeToUpdate).subscribe(
      (response) => {
        console.log('employee updated successfully:', response);
        alert("employee updated successfully")
        this.getdata();
        this.employeeToUpdate = {};
      },
      (error) => {
        console.error('Error occurred while updating employee:', error);
        
      }
    );
    this.showData = true;
    this.showForm = false;
  }
  logout(){
    this.router.navigate(['/login'])
    localStorage.clear()
    }
}
