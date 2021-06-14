import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './core/services/user.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(public userService: UserService, private router: Router) {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const expectedRoles = route.data.roles;

    if (!this.userService.type || !expectedRoles.includes(this.userService.type)) {

      Swal.fire('Oops...', 'Access not allowed, Login with suitable credentials!', 'error')

      this.router.navigate(["/login"]);
      return false;
    }

    return true;
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const expectedRoles = childRoute.data.expectedRoles;

      if (!this.userService.type || !expectedRoles.includes(this.userService.type)) {
        alert('Access not allowed! Login with suitable credentials!');
        this.router.navigate(["/login"]);
        return false;
      }
  
      return true;
  }

}
