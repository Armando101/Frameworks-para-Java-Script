import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';

import Swal from 'sweetalert2';
import { AuthService } from 'src/app/services/auth.service';
import * as ui from 'src/app/shared/ui.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  loading: boolean = false;
  subscriptionUi: Subscription;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    this.subscriptionUi = this.store.select('ui').subscribe(ui => {
      this.loading = ui.isLoading;
    });
  }

  login() {
    if (this.loginForm.invalid) return;

    this.store.dispatch(ui.isLoading());

    const { email, password } = this.loginForm.value;
    this.auth.login(email, password)
      .then(credentials => {
        console.log(credentials);
        this.store.dispatch(ui.stopLoading());
        this.router.navigate(['/'])
      })
      .catch(err => {
        this.store.dispatch(ui.stopLoading());
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.message,
        });
      });
  }

  ngOnDestroy() {
    this.subscriptionUi.unsubscribe();
  }

}
