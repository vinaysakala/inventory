import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { OtpverificationComponent } from './otpverification/otpverification.component';
import { UserComponent } from './user/user.component';
import { EmployeesComponent } from './employees/employees.component';
import { ProductComponent } from './product/product.component';
import { StocksComponent } from './stocks/stocks.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { CreatestocksComponent } from './createstocks/createstocks.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { CreateproductcategoryComponent } from './createproductcategory/createproductcategory.component';
import { CreateemployeesComponent } from './createemployees/createemployees.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import{MatButtonModule} from '@angular/material/button';
import{MatIconModule} from '@angular/material/icon';
import { UserserviceService } from './userservice.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { UserService } from './user.service';
import { ProductService } from './product.service';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    ForgetpasswordComponent,
    OtpverificationComponent,
    UserComponent,
    EmployeesComponent,
    ProductComponent,
    StocksComponent,
    ProductCategoryComponent,
    CreateuserComponent,
    CreatestocksComponent,
    CreateproductComponent,
    CreateproductcategoryComponent,
    CreateemployeesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatToolbarModule,MatSidenavModule,MatButtonModule,MatIconModule,ReactiveFormsModule,HttpClientModule,ToastModule,
    ButtonModule,ChartModule
  ],
  providers: [UserserviceService,UserserviceService,MessageService,UserService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
