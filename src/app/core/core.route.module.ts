import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    // { path: '', component: DbInstanceComponent },
    // {
    //     path: 'dashboard', component: DashboardComponent,
    //     children: [
    //         { path: 'jobHistory', component: JobHistoryComponent },
    //     ]
    // },

    // {}
    //   { path: '', pathMatch: 'full', redirectTo: 'hello' },
    //   { path: 'hello', loadChildren: '../core/core.module#CoreModule' },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }
