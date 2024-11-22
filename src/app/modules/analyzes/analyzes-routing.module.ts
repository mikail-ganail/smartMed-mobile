import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyzesPage } from './analyzes.page';

const routes: Routes = [
  {
    path: '',
    component: AnalyzesPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalyzesPageRoutingModule {}
