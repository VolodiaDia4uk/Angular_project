// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
// import {AuthService} from "./auth.service";
// import { Observable } from 'rxjs';
//
//
// @Injectable()
// export class AuthGuard implements CanActivate {
//
//   constructor(private router: Router,
//               private authService: AuthService) { }
//
//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
//     if(this.authService.isLoggedIn !== true) {
//       this.router.navigate(['/login']);
//     }
//     return true;
//   }
//
// }
