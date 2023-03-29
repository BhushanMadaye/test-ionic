import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ToastController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  })

  constructor(
    private router: Router, 
    private fb: FormBuilder, 
    private loginService: LoginService, 
    private toastController: ToastController
    ) { }
  

  ionViewWillEnter() {
    this.loginForm.reset();
  }

  login(): void {
    if (this.loginForm.invalid) return this.loginForm.markAllAsTouched();
    
    this.loginService.login(this.loginForm.value)
    .pipe(
      map(res => {
        if (res) {
          this.router.navigate(['folder/create']);
          this.showToaster(`Login successful`);
        } else {
          this.showToaster(`Incorrect credentials. Please try again!`);
        }
      })
    )
    .subscribe();
  }

  async showToaster(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'bottom'
    });

    await toast.present();
  }
}
