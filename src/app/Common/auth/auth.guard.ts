import {AuthGuardService} from './auth.guard.service';
import {Injectable} from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    ActivatedRoute
} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable()
export class AuthGuard implements CanActivate {

    lstPermission : any[] = new Array<any>();

    constructor(
        private authGuardService : AuthGuardService, 
        private router : Router, 
     
    ) {}

    canActivate(
        activeRouter : ActivatedRouteSnapshot, 
        state : RouterStateSnapshot
    ): Observable<boolean> {

        return this.authGuardService.isLoggedIn.pipe(map((isLoggedIn : boolean) => {           
            if (!localStorage.getItem("Token")) {
                this.router.navigate(['/login']);
                return false;
            } 
            else{
                return true;
            } 
        }));
    }
}
