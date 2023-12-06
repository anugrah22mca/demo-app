import { Component } from '@angular/core';
import { S3UploadService } from '../s3-upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  selectedFile: File | null = null;

  constructor(private s3Service: S3UploadService) {}

  onFileChange(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  uploadFile(): void {
    if (this.selectedFile) {
      this.s3Service.uploadFile(this.selectedFile).subscribe(
        (data) => {
          console.log('File uploaded successfully:', data);
          // Handle the response as needed
          alert('File uploaded successfully:')
        },
        (error) => {
          console.error('Error uploading file', error);
          // Handle the error as needed
        }
      );
    }
  }
}
