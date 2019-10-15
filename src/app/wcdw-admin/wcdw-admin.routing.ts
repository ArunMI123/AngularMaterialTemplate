import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DbInstanceComponent } from './pages/db-instance/db-instance.component';
import { JobHistoryComponent } from './pages/job-history/job-history.component';
const routes: Routes = [
    {
        path: '', component: DbInstanceComponent,
    },
    {
        path: 'dashboard', component: DashboardComponent,
        children: [
            { path: 'jobHistory', component: JobHistoryComponent },
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WcdwRoutingModule { }
