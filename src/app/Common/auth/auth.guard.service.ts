import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LocalstoreService } from 'src/app/Common/service/localstore.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private router: Router, private localstoreService: LocalstoreService) {

  }
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  setLoggedIn() {
    this.loggedIn.next(true);
  }
  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

  private hasToken(): boolean {
    return !!localStorage.getItem("Token");
  }
}
