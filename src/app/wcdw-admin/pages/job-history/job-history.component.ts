import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import {
  JobDefinationData,
  JobStatusData,
  JobSnapshotData,
  JobStartTimeData
} from './data';
import { StateGroup } from '../../models/interfaces';
import { CommonService } from 'src/app/providers/common.service';
export const filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();
  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};
@Component({
  selector: 'app-job-history',
  templateUrl: './job-history.component.html',
  styleUrls: ['./job-history.component.scss']
})
export class JobHistoryComponent implements OnInit {
  jobDefinationGroups: StateGroup[];
  jobSnapshotGroups: StateGroup[] ;
  jobStatusGroups: StateGroup[] ;
  jobStartTimeGroups: StateGroup[];

  jobDefinationForm: FormGroup = this.formBuilder.group({
    jobDefination: ['', Validators.required]
  });
  jobDefinationOptions: Observable<StateGroup[]>;

  jobStatusForm: FormGroup = this.formBuilder.group({
    jobStatus: ['', Validators.required]
  });
  jobStatusOptions: Observable<StateGroup[]>;

  jobSnapshotForm: FormGroup = this.formBuilder.group({
    jobSnapshot: ['', Validators.required]
  });
  jobSnapshotOptions: Observable<StateGroup[]>;

  jobStartTimeForm: FormGroup = this.formBuilder.group({
    jobStartTime: ['', Validators.required]
  });
  jobStartTimeOptions: Observable<StateGroup[]>;
  constructor(private formBuilder: FormBuilder, private commonService: CommonService) {}
  ngOnInit() {
    this.commonService.getJobDefination().subscribe((res: any) => {
      console.log(res);
      this.jobDefinationGroups = res.DB_instance;
    },
    error => {
      console.log(error);
    });
    this.commonService.getJobStatus().subscribe((res: any) => {
      console.log(res);
      this.jobStatusGroups = res.DB_instance;

    },
    error => {
      console.log(error);
    });
    this.commonService.getJonsnapshot().subscribe((res: any) => {
      console.log(res);
      this.jobSnapshotGroups = res.DB_instance;
    },
    error => {
      console.log(error);
    });
    this.commonService.getStartTime().subscribe((res: any) => {
      console.log(res);
      this.jobStartTimeGroups = res.DB_instance;
      this.assignData();
    },
    error => {
      console.log(error);
    });
  }
  assignData(): void {
    debugger
    // tslint:disable-next-line:no-non-null-assertion
    this.jobDefinationOptions = this.jobDefinationForm
      .get('jobDefination')!
      .valueChanges.pipe(
        startWith(''),
        map(value => this.filterJobDefinationGroup(value))
      );

    // tslint:disable-next-line:no-non-null-assertion
    this.jobStatusOptions = this.jobStatusForm
      .get('jobStatus')!
      .valueChanges.pipe(
        startWith(''),
        map(value => this.filterStatusGroup(value))
      );

    // tslint:disable-next-line:no-non-null-assertion
    this.jobSnapshotOptions = this.jobSnapshotForm
      .get('jobSnapshot')!
      .valueChanges.pipe(
        startWith(''),
        map(value => this.filterSnapshotGroup(value))
      );
    // tslint:disable-next-line:no-non-null-assertion
    this.jobStartTimeOptions = this.jobStartTimeForm
      .get('jobStartTime')!
      .valueChanges.pipe(
        startWith(''),
        map(value => this.filterStartTimeGroup(value))
      );
  }
  private filterJobDefinationGroup(value: string): StateGroup[] {
    if (value) {
      return this.jobDefinationGroups
        .map(group => ({
          letter: group.letter,
          names: filter(group.names, value)
        }))
        .filter(group => group.names.length > 0);
    }

    return this.jobDefinationGroups;
  }

  private filterStatusGroup(value: string): StateGroup[] {
    if (value) {
      return this.jobStatusGroups
        .map(group => ({
          letter: group.letter,
          names: filter(group.names, value)
        }))
        .filter(group => group.names.length > 0);
    }

    return this.jobStatusGroups;
  }

  private filterSnapshotGroup(value: string): StateGroup[] {
    if (value) {
      return this.jobSnapshotGroups
        .map(group => ({
          letter: group.letter,
          names: filter(group.names, value)
        }))
        .filter(group => group.names.length > 0);
    }

    return this.jobSnapshotGroups;
  }

  private filterStartTimeGroup(value: string): StateGroup[] {
    if (value) {
      return this.jobStartTimeGroups
        .map(group => ({
          letter: group.letter,
          names: filter(group.names, value)
        }))
        .filter(group => group.names.length > 0);
    }

    return this.jobStartTimeGroups;
  }
}
