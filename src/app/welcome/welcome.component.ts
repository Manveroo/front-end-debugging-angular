import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [UserService]
})
export class WelcomeComponent implements OnInit {
  hello = 'Hello from WelcomeController';
  authenticated = false;

  constructor(userService: UserService) {
    this.authenticated = userService.isLoggedIn();
  }

  ngOnInit() {
  }

}
