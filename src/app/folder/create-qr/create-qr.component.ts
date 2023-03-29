import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-qr',
  templateUrl: './create-qr.component.html',
  styleUrls: ['./create-qr.component.scss'],
})
export class CreateQrComponent  implements OnInit {

  title: string = 'app';
  elementType: string = 'url';
  value: string = 'Hello World!';
  inputString: string = 'Hello World!';

  constructor() { }

  ngOnInit() {}

  generateQR(): void {
    this.value = this.inputString;
  }

}
