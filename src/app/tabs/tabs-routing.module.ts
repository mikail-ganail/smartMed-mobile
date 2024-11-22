import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'main',
        loadChildren: () => import('../modules/main/main.module').then(m => m.MainPageModule)
      },
      {
        path: 'analyzes',
        loadChildren: () => import('../modules/analyzes/analyzes.module').then(m => m.AnalyzesPageModule)
      },
      {
        path: 'devices',
        loadChildren: () => import('../modules/devices/devices.module').then(m => m.DevicesPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/main',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
