import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiaService {

  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/dias';

  constructor(private http: HttpClient) { }

  getDia(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createDia(dia: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, dia);
  }

  updateDia(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteDia(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getDiasList(): Promise<any> {
    return this.http.get(`${this.baseUrl}`).toPromise();
  }
}
