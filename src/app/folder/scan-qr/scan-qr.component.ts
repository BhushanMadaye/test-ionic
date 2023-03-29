import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Flashlight } from '@awesome-cordova-plugins/flashlight/ngx';

@Component({
  selector: 'app-scan-qr',
  templateUrl: './scan-qr.component.html',
  styleUrls: ['./scan-qr.component.scss'],
})
export class ScanQrComponent  implements OnInit {

  output: any;
  constructor(private barcodeScanner: BarcodeScanner, private flashlight: Flashlight) { }

  ngOnInit() {}

  scanQR(isFlashOn = false) {
    if (isFlashOn) this.flashlight.switchOn();

    this.barcodeScanner.scan().then(res => {
      this.output = res.text;
    })
  }
}
