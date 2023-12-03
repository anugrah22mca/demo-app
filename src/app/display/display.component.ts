// display.component.ts
import { Component } from '@angular/core';
import { S3Service } from '../s3.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  fileData: any;

  constructor(private s3Service: S3Service) {}

  loadFileData(): void {
    this.s3Service.getFileData('your-bucket-name', 'sensor_data.json')
      .then(data => {
        this.fileData = data.Body.toString();
        // Parse the JSON data and display it in a line chart
        // Example: Use a library like Chart.js to render the line chart
      })
      .catch(err => console.error('Error loading file data', err));
  }
}
