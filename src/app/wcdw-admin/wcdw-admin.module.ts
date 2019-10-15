import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbInstanceComponent } from './pages/db-instance/db-instance.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { JobHistoryComponent } from './pages/job-history/job-history.component';
import { WcdwRoutingModule } from './wcdw-admin.routing';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JobHistoryTableComponent } from './pages/job-history-table/job-history-table.component';
import { AngularCoreModule } from '../ng.core.module';
import { CommonService } from '../providers/common.service';



@NgModule({
  declarations: [DbInstanceComponent, DashboardComponent, JobHistoryComponent, JobHistoryTableComponent],
  imports: [
    CommonModule,
    WcdwRoutingModule,
    MaterialModule,
    AngularCoreModule
  ],
  providers: [CommonService]
})
export class WcdwAdminModule { }
