import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createstocks',
  templateUrl: './createstocks.component.html',
  styleUrls: ['./createstocks.component.css']
})
export class CreatestocksComponent implements OnInit{
  loginTime:any
  stockobj:any={
  
    Name:"",
    Quantity:"",
    Location:"",
    TranscationType:""
   }
   constructor(private ss:StockService,private router:Router){
    this.loginTime = sessionStorage.getItem('loginTime');
   }

   ngOnInit(): void {
     
   }

   save(){
    console.log(this.stockobj)
    this.ss.postData(this.stockobj).subscribe(
      response => {
        
        console.log('Form data submitted successfully:', response);
        alert('stock added sucessfully')
        this.reset1();
      },
      error => {
        console.error('Error submitting form data:', error);
      }
      
    );
   }



   reset1(){
    this.stockobj.Name=""
    this.stockobj.Quantity=""
    this.stockobj.Location=""
    this.stockobj.TranscationType=""
   }
   logout(){
    this.router.navigate(['/login'])
    localStorage.clear()
    }
}
