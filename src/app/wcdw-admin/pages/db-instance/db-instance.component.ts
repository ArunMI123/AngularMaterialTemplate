import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { StateGroup } from '../../models/interfaces';
import { dbData } from './data';
import {CommonService} from '../../../providers/common.service';
export const filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};
@Component({
  selector: 'app-db-instance',
  templateUrl: './db-instance.component.html',
  styleUrls: ['./db-instance.component.scss']
})
export class DbInstanceComponent implements OnInit {
  stateForm: FormGroup = this.formBuilder.group({
    stateGroup: ['', Validators.required]
  });

  stateGroups: StateGroup[] ;

  stateGroupOptions: Observable<StateGroup[]>;

  constructor(private formBuilder: FormBuilder, private commonService: CommonService) {}

  ngOnInit() {
    this.commonService.getDBInstance().subscribe((res: any) => {
      this.stateGroups = res.DB_instance;
      console.log(this.stateGroups);
      this.filterCall();
    },
    error => {
      console.log(error);
    });

  }
  filterCall() {
        // tslint:disable-next-line:no-non-null-assertion
        this.stateGroupOptions = this.stateForm
        .get('stateGroup')!
        .valueChanges.pipe(
          startWith(''),
          map(value => this.filterGroup(value))
        );
  }
  private filterGroup(value: string): StateGroup[] {
    if (value) {
      return this.stateGroups
        .map(group => ({
          letter: group.letter,
          names: filter(group.names, value)
        }))
        .filter(group => group.names.length > 0);
    }

    return this.stateGroups;
  }
}
