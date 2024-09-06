import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  
 
  postFormData(employeeobj: any): Observable<any> {
    return this.http.post('http://localhost:8080/inserts', employeeobj);
  }

  getData(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/employee');
  }
  deleteDocument(id: string) {
    console.log(id)
    return this.http.delete('http://localhost:8080/empdelete',{body:[id]});
  }

  updateemployee(employeeId: string, employeeData: any): Observable<any> {
    return this.http.post('http://localhost:8080/updateemployee', employeeData);
  }
}
