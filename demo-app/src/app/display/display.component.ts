// display.component.ts
import { Component } from '@angular/core';
import { S3UploadService } from '../s3-upload.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  fileName: string = '';
  fileData: any;

  constructor(private s3Service: S3UploadService) {}

  getFileData(): void {
    if (this.fileName) {
      this.s3Service.getFileData(this.fileName).subscribe(
        (data) => {
          console.log('File data retrieved successfully:', data);
          this.fileData = data;

          // Handle the response as needed
        },
        (error) => {
          console.error('Error retrieving file data', error);
          // Handle the error as needed
        }
      );
    }
  }
  getData(): void {
    if (this.fileName) {
      this.s3Service.getData(this.fileName).subscribe(
        (data) => {
          console.log('File data retrieved successfully:', data);
          this.fileData = data;

          // Handle the response as needed
        },
        (error) => {
          console.error('Error retrieving file data', error);
          // Handle the error as needed
        }
      );
    }
  }
}
