// s3.service.ts
import { Injectable } from '@angular/core';
import { S3 } from 'aws-sdk';

@Injectable({
  providedIn: 'root',
})
export class S3Service {
  private s3: S3;

  constructor() {
    this.s3 = new S3({
      accessKeyId: 'your-access-key-id',
      secretAccessKey: 'your-secret-access-key',
      region: 'your-region',
    });
  }

  uploadFile(file: File, bucketName: string, key: string): Promise<any> {
    const params = {
      Bucket: bucketName,
      Key: key,
      Body: file,
    };

    return this.s3.upload(params).promise();
  }

  listFiles(bucketName: string): Promise<any> {
    const params = {
      Bucket: bucketName,
    };

    return this.s3.listObjectsV2(params).promise();
  }

  getFileData(bucketName: string, key: string): Promise<any> {
    const params = {
      Bucket: bucketName,
      Key: key,
    };

    return this.s3.getObject(params).promise();
  }
}
