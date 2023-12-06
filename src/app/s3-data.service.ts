import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class S3DataService {
  private apiUrl = 'http://13.232.185.3/api'; // Replace with your Node.js server URL

  constructor(private http: HttpClient) {}

  getFileData(fileName: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/file/${fileName}`);
  }
}
