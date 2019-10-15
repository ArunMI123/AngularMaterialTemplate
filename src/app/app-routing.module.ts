import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './core/pages/header/header.component';
import { CoreModule } from './core/core.module';
import { WcdwAdminModule } from './wcdw-admin/wcdw-admin.module';


const routes: Routes = [
  // {  path : '' , loadChildren: () => CoreModule  },
  {  path : '' , loadChildren: () => WcdwAdminModule  },
  // {}
  // { path: '', pathMatch: 'full', redirectTo: 'hello' },
  // { path: 'hello', loadChildren: '../core/core.module#CoreModule' },
  // {path: '' , loadChildren : '../wcdw-admin/wcdw-admin.module#WcdwAdminModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CoreModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
