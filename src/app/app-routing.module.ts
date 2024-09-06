import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { OtpverificationComponent } from './otpverification/otpverification.component';
import { EmployeesComponent } from './employees/employees.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { StocksComponent } from './stocks/stocks.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { CreatestocksComponent } from './createstocks/createstocks.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { CreateproductcategoryComponent } from './createproductcategory/createproductcategory.component';
import { CreateemployeesComponent } from './createemployees/createemployees.component';
import { authGuard } from './guards/auth.guard';






const routes: Routes = [
  {path:"",component:LoginComponent},
  {
    path:"login",component:LoginComponent,
    canActivate:[authGuard]
    },
    {path:"signup",component:SignupComponent
    
  },
    {path:"dashboard",component:DashboardComponent,
    canActivate:[authGuard]             
  },
    {path:"forgetpassword",component:ForgetpasswordComponent},
    {path:"otpverification",component:OtpverificationComponent},
    {path:"employees",component:EmployeesComponent,
    canActivate:[authGuard]},
    {path:"user",component:UserComponent,
    canActivate:[authGuard]},
    {path:"product",component:ProductComponent,
    canActivate:[authGuard]},
    {path:"stocks",component:StocksComponent,
    canActivate:[authGuard]},
    {path:"productcategory",component:ProductCategoryComponent,
    canActivate:[authGuard]},
    {path:"createuser",component:CreateuserComponent,
    canActivate:[authGuard]},
    {path:"createstock",component:CreatestocksComponent,
    canActivate:[authGuard]},
    {path:"createproduct",component:CreateproductComponent,canActivate:[authGuard]},
    {path:"createproductcategory",component:CreateproductcategoryComponent,canActivate:[authGuard]},
    {path:"createemployees",component:CreateemployeesComponent,canActivate:[authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
