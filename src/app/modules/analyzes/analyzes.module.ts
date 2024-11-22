import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnalyzesPage } from './analyzes.page';

import { AnalyzesPageRoutingModule } from './analyzes-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AnalyzesPageRoutingModule,
  ],
  declarations: [AnalyzesPage],
})
export class AnalyzesPageModule {}
