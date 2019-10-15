import { Component, OnInit } from '@angular/core';
import { JobHistoryTable } from '../../models/interfaces';
import { JobHistoryTableData } from './data';
import { CommonService } from 'src/app/providers/common.service';
const ELEMENT_DATA: JobHistoryTable[] = JobHistoryTableData;
@Component({
  selector: 'app-job-history-table',
  templateUrl: './job-history-table.component.html',
  styleUrls: ['./job-history-table.component.scss']
})
export class JobHistoryTableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'status', 'wF', 'dbErr', 'launchedBy'];
  dataSource: any = [];
  constructor(public commonService: CommonService) { }

  ngOnInit() {
    this.commonService.getJobTable().subscribe((res: any) => {
      this.dataSource = res.DB_instance;
    },
    error => {
      console.log(error);
      
    }
    );
  }

}
