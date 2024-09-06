import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
stockdata:any;
loginTime:any;


  stockToUpdate: any = {}; 
  showForm: boolean = false;
  showData: boolean = true;
constructor(private ss:StockService,private router:Router){
  
}
ngOnInit(): void {
  this.loginTime = sessionStorage.getItem('loginTime');
  this.getdata()
}

getdata(){
  this.ss.getDatastock().subscribe((resp)=>{
    this.stockdata=resp
  })
}
delete(id:any){
  this.ss.deleteData(id).subscribe(
    (resp: any)=>{
    console.log(resp)
      this.getdata()
  })
}

populatestockData(product: any) {
  this.stockToUpdate = { ...product };
  this.showForm = true;
  this.showData = false;
}

updatestock(  ) {
  console.log('Updating stock:', this.stockToUpdate);
  this.ss.updatestock(this.stockToUpdate._id, this.stockToUpdate).subscribe(
    (response) => {
      console.log('Stock updated successfully:', response);
      alert("stock updated successfully")
      this.getdata();
      this.stockToUpdate = {};
    },
    (error) => {
      console.error('Error occurred while updating stock:', error);
      
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
