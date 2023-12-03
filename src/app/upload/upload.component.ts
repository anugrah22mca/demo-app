// upload.component.ts
import { Component } from '@angular/core';
import { S3Service } from '../s3.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  selectedFile: File | null = null;

  constructor(private s3Service: S3Service) {}

  onFileChange(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  uploadFile(): void {
    if (this.selectedFile) {
      this.s3Service.uploadFile(this.selectedFile, 'your-bucket-name', 'sensor_data.json')
        .then(() => console.log('File uploaded successfully'))
        .catch(err => console.error('Error uploading file', err));
    }
  }
}
