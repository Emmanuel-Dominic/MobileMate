import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  favoriteActivityList: Observable<any> = of([]);

  constructor(
    private _angularFireStore: AngularFirestore,
    private _angularFireAuth: AngularFireAuth
  ) { }

  ngOnInit(): void {
    this._angularFireAuth.authState.pipe(take(1)).subscribe((user) => {
      if (user) {
        this.favoriteActivityList = this._angularFireStore
          .collection(`favorites/${user.uid}/favorites`)
          .valueChanges() as Observable<any[]>;
      } else {
        this.favoriteActivityList = of([]);
      }
    });
  }
}
