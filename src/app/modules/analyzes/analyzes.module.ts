import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnalyzesPage } from './analyzes.page';

import { AnalyzesPageRoutingModule } from './analyzes-routing.module';
import { EripomochComponent } from './eripomoch/eripomoch.component';
import { DoctorComponent } from "./doctor/doctor.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AnalyzesPageRoutingModule,
    EripomochComponent,
    DoctorComponent
],
  declarations: [AnalyzesPage],
})
export class AnalyzesPageModule {}
