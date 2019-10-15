import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ProfileCardComponent } from './pages/profile-card/profile-card.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, ProfileCardComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class CoreModule { }
