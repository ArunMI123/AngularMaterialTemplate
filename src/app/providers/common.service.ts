import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public http: HttpClient) {

  }
  getDBInstance() {
    return this.http.get('assets/json/db.instance.json');
  }
  getStartTime() {
    return this.http.get('assets/json/job.startTime.json');
  }
  getJobDefination() {
    return this.http.get('assets/json/job.defination.json');
  }
  getJonsnapshot() {
    return this.http.get('assets/json/job.snapshot.json');
  }
  getJobTable() {
    return this.http.get('assets/json/job.table.json');
  }
  getJobStatus() {
    return this.http.get('assets/json/job.status.json');
  }
}
