import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http : HttpClient = inject(HttpClient)
  constructor() { }

  fetchData(){
    return this.http.get(environment.apiurl);
  }
}
