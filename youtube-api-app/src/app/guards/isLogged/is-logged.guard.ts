import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {MembersAreaService} from "../../services/members-area/members-area.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IsLoggedGuard implements CanActivate {

  constructor(private membersAreaService: MembersAreaService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.membersAreaService.getIsUserLogged()) {
      this.router.navigate(['/']);
    }
    return this.membersAreaService.getIsUserLogged();
  }

}
