import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UpdatePackage } from './../models/update-package.interface';

@Injectable()
export class UpdateService {
  constructor(private http: HttpClient) {}

  getUpdates() {
    return this.http.get<UpdatePackage[]>(
      'https://api.xpresscue.theatrixx.com/api/v1/updates/'
    );
  }
}
