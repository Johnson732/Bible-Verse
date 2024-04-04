import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http:HttpClient) { }

  getRequest(){
    const url="http://localhost:3000/verse";
    return this.http.get<any>(url);
  }
}
