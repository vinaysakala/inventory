import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
   datapro:any;
   product: any;
   loginTime:any;
   productToUpdate: any = {}; 
   showForm: boolean = false;
   showData: boolean = true;
constructor(private router:Router,private ps:ProductService){
  
}
  ngOnInit(): void {
    this.loginTime = sessionStorage.getItem('loginTime');
    this.getData();
  }
  getData(){
    this.ps.getDataprd().subscribe((result)=>{
    this.datapro=result;
    }

    )
  }

  delete(id:any){
     this.ps.deletepro(id).subscribe(
      (resp)=>{
      console.log(resp)
      this.getData()
    },
    (err)=>{
      console.log(err)
    })
  }
   

  populateProductData(product: any) {
    this.productToUpdate = { ...product };
    this.showForm = true;
    this.showData = false;
  }

  updateProduct(  ) {
    
    this.ps.updateProduct(this.productToUpdate._id, this.productToUpdate).subscribe(
      (response) => {
        console.log('Product updated successfully:', response);
        alert("Product updated successfully")
        this.getData();
        this.productToUpdate = {};
      },
      (error) => {
        console.error('Error occurred while updating product:', error);
        
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
