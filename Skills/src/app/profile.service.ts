import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private isLoggedIn:boolean | undefined;
  constructor() { }

  public LoggedInStatus(){
    this.isLoggedIn = true;
    return this.isLoggedIn;
  }
}
