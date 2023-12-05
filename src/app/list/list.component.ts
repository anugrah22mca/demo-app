// list.component.ts
import { Component, OnInit } from '@angular/core';
import { S3UploadService } from '../s3-upload.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  files: any[] = [];

  constructor(private s3Service: S3UploadService) {}

  ngOnInit(): void {
    this.s3Service.getFiles().subscribe(
      (data) => {
        this.files = data;
      },
      (error) => {
        console.error('Error fetching files', error);
      }
    );
  }
}
