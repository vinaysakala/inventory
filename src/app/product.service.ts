import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  postData(productobj:any):Observable<any>{
    return this.http.post('http://localhost:8080/insert',productobj)
  }
  getDataprd():Observable<any>{

    return this.http.get<any>('http://localhost:8080/product')
  }


  deletepro(id:string){
    return this.http.delete('http://localhost:8080/prodelete',{body:[id]})
  }
   


  updateProduct(productId: string, productData: any): Observable<any> {
    return this.http.post('http://localhost:8080/updateProduct', productData);
  }

  
}
