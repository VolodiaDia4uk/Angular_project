import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable} from "rxjs/index";

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = firebaseAuth.authState;
  }

  doRegistr(email: string, password: string) {
    return this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        alert('e-mail adress in used by another', err.message);
      });
  }

  doLogin(email: string, password: string) {
     return this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }
  // isLoggedIn() {
  //   if (this.user == null ) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }
  logout() {
    this.firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['/login']));
  }
}


