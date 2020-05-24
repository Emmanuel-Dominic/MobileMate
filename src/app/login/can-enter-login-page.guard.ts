import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { first, map } from 'rxjs/operators';


export const canEnterLoginPageGuard: CanActivateFn = async (route, state) => {
  const angularFireAuth = inject(AngularFireAuth);
  const router = inject(Router);

  return angularFireAuth.authState.pipe(
    map((user) => {
      if (user) {
        router.navigate(['/tabs']);
        return false;
      } else {
        return true;
      }
    }),
    first(), // extract the first value
  ).toPromise().then((result) => result ?? false);
};