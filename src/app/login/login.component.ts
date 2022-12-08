import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(){  }

  ngOnInit() {
  }

  loginUser(event: any) {
    event.preventDefault ()
    const target = event.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value
    console.log(username, password)
  }
}
