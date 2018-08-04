import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import { AppUser } from '../models/app-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.User>;

  constructor(
    private userService: UserService,
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute) {
    this.user$ = afAuth.authState;
  }

  login() {
    // tslint:disable-next-line:prefer-const
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  get appUser$(): Observable<AppUser> {
    return this.user$
      .switchMap(user => {
        if (user) { return this.userService.get(user.uid).valueChanges(); }

        return Observable.of(null);
      });
  }
}
