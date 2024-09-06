import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { UserserviceService } from '../userservice.service';
import { UserService } from '../user.service';
import { UsertableService } from '../usertable.service';
import { StockService } from '../stock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username:any; 
  productCount: number = 0;
  data: any;
  options: any;
  loginTime:any;



  constructor(private ps:ProductService ,private service:UserService , private us:UsertableService,private ss:StockService,private router:Router) {
    
    
    this.data = {
      labels: ['Today', 'Yesterday', 'Last Week', 'This Week', 'Last Month'],
      datasets: [
        {
          data: [100, 500, 50, 1000, 15],
          backgroundColor: ['red', 'green', 'blue', 'orange', 'brown']
        }
      ]
    };

    this.options = {
      legend: {
        display: true
      },
      title: {
        display: true,
        text: 'User'
      }
    };
   }
     Dataemp:any;
     Datastock:any;
     Datauser:any;
    pro:any;
    emp:any;
    user:any;
    stock:any;

  ngOnInit(): void {
    if(!localStorage.getItem('username')){
      this.router.navigate(['/login'])
    }


    this.username=localStorage.getItem('username')
    this.loginTime = sessionStorage.getItem('loginTime');
    this.ps.getDataprd().subscribe((resp)=>{
      console.log(resp.data.length)
      this.pro=resp.data
    })

    this.service.getData().subscribe((resp)=>{
      
      this.Dataemp = resp;
      console.log(this.Dataemp.data.length);
      this.emp=this.Dataemp.data
    })

    this.us.getData().subscribe((resp)=>{
      this.Datauser = resp;
      console.log(this.Datauser.data.length);
      this.user=this.Datauser.data
    }
    )
    this.ss.getDatastock().subscribe((resp)=>{
      this.Datastock=resp;
      this.stock=this.Datastock.data
    })

  }
  logout(){
  this.router.navigate(['/login'])
  localStorage.clear()
  }
  
}
