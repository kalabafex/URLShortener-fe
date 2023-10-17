import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ShortenerService {
  private baseUrl="http://localhost:8080/urls"
  constructor(private httpClient: HttpClient) { }

  // getShortenedURL(url:string): Observable<string>{
  //   return this.httpClient.get<string>(`${this.baseUrl}/${id}`);
  //   }
  getShortenedURL(url:string): Observable<any>  {
      const headers = { 'content-type': 'application/json'}
      const body=JSON.stringify(url);
      return this.httpClient.post(this.baseUrl,body,{'headers':headers});
    }
}
