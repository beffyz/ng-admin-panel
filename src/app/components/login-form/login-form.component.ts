import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({});

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.buildForm();

    if (this.authenticationService.isLoggedIn()) {
      this.router.navigate(['admin']);
    }
  }

  buildForm(): void {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-Za-z\d]{6,}$/),
      ]),
    });
  }

  submitLogin(): void {
    this.authenticationService.login(this.loginForm.value).subscribe({
      next: () => this.router.navigate(['admin']),
      error: (err) => alert(err.message),
    });
  }
}
