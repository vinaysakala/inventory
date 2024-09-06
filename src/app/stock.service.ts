import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http:HttpClient) { }

  postData(stockobj:any):Observable<any>{
    debugger;
    return this.http.post('http://localhost:8080/insert-stock',stockobj)
  }
  getDatastock():Observable<any>{

    return this.http.get<any>('http://localhost:8080/stock')
  }
   

  deleteData(id:any){
    return this.http.delete('http://localhost:8080/stockdelete',{body:[id]})
  }


  updatestock(stockId: string, stockData: any): Observable<any> {
    return this.http.post('http://localhost:8080/updatestock', stockData);
  }
}
