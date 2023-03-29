import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { CreateQrComponent } from './create-qr/create-qr.component';
import { ScanQrComponent } from './scan-qr/scan-qr.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Flashlight } from '@awesome-cordova-plugins/flashlight/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    NgxQRCodeModule
  ],
  declarations: [FolderPage, CreateQrComponent, ScanQrComponent],
  providers: [BarcodeScanner, Flashlight]
})
export class FolderPageModule {}
