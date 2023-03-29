import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Generate QR', url: '/folder/create', icon: 'create' },
    { title: 'Scan QR', url: '/folder/scan', icon: 'barcode' },
    { title: 'Logout', url: '/login', icon: 'log-out' }
  ];
  constructor() {}
}
