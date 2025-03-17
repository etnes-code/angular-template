import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment/environment';

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
