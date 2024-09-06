import { Component ,OnInit,ViewChild, inject} from '@angular/core';
import { ProductService } from '../product.service';
import { NgForm } from '@angular/forms';
import { ProductComponent } from '../product/product.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent {
   loginTime:any;
  productobj:any={
    Name:"",
    
    Category:"",
    Price:"",
    Stock:"",
    
   }


   constructor(private ps:ProductService,private router:Router){
    this.loginTime = sessionStorage.getItem('loginTime');
   }
 
   
   

   add(){
    
    this.ps.postData(this.productobj).subscribe(response=>{
      console.log('Form data submitted successfully:', response);
      alert('product added sucessfully')
      this.reset2();
      
     
    },
    error => {
      console.error('Error submitting form data:', error);
    }
    
    );
   }



   reset2(){
    this.productobj.Name=""
    this.productobj.Category=""
    this.productobj.Price=""
    this.productobj.Stock=""
   }

   
   logout(){
    this.router.navigate(['/login'])
    localStorage.clear()
    }
   
  
}
