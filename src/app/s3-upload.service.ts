import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class S3UploadService {
  private apiUrl = 'http://localhost:3000'; // Replace with your Node.js server URL

  constructor(private http: HttpClient) {}

  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<any>(`${this.apiUrl}/upload`, formData);
  }

  getFiles(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/files`);
  }

  getFileData(fileName: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/file/${fileName}`);
  }
  getData(fileSName: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/download/${fileSName}`);
  }
}
