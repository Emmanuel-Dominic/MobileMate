import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoginCredential } from '../types';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _angualrFireAuth: AngularFireAuth) { }

  login(credentials: LoginCredential): Promise<any> {
    return this._angualrFireAuth.signInWithEmailAndPassword(credentials.email, credentials.password);
  }
}
