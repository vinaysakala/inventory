import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsertableService {

  constructor(private http:HttpClient) { }

  postFormData(userobj: any): Observable<any> {
    
    return this.http.post('http://localhost:8080/user', userobj);
  }

  getData(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/getuser');
  }
  deleteDocument(id: string) {
    console.log(id)
    return this.http.delete('http://localhost:8080/userdelete',{body:[id]});
  }

  updateUser(userId: string, userData: any): Observable<any> {
    return this.http.post('http://localhost:8080/updateuser', userData);
  }
}
