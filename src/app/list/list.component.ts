// list.component.ts
import { Component } from '@angular/core';
import { S3Service } from '../s3.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  files: any[] = [];

  constructor(private s3Service: S3Service) {}

  ngOnInit(): void {
    this.s3Service.listFiles('your-bucket-name')
      .then(data => this.files = data.Contents || [])
      .catch(err => console.error('Error listing files', err));
  }
}
