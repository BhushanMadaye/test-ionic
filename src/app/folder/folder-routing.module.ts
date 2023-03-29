import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';
import { CreateQrComponent } from './create-qr/create-qr.component';
import { ScanQrComponent } from './scan-qr/scan-qr.component';

const routes: Routes = [
  {
    path: '',
    component: FolderPage,
    children: [
      {
        path: '',
        redirectTo: 'create',
        pathMatch: 'full'
      },
      {
        path: 'create',
        component: CreateQrComponent
      },
      {
        path: 'scan',
        component: ScanQrComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
