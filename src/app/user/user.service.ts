import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  authenticated = true;

  isLoggedIn() {
    return this.authenticated;
  }
}
