import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { ProfileService } from './profile.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private profile: ProfileService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.profile.LoggedInStatus()) {
      // Handle unauthorized access here, for example, redirect to login page
      return false;
    } else {
      return true;
    }
  }
}
