import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { App } from '../models/search';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  baseUrl = environment.api.baseUrl;  
  constructor(private http: HttpClient) { }

  getUser(searchText: string): Observable<App> {
    return this.http.get<App>(`${this.baseUrl}/search/users?q=${searchText} in:login`)
  };

}
