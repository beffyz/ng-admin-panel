import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.title = 'Dashboard Panel | Log In'
  }

}
