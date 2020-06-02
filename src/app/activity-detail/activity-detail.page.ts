import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../types';
import { ActivityService } from '../activity.service';
import { ActivatedRoute } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { ActivityVideoPage } from '../activity-video/activity-video.page';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.page.html',
  styleUrls: ['./activity-detail.page.scss'],
})
export class ActivityDetailPage implements OnInit {
  activityDetail: Observable<Activity>;

  constructor(
    private _toastController: ToastController,
    private _angularFireStore: AngularFirestore,
    private _angularFireAuth: AngularFireAuth,
    private _modalController: ModalController,
    activityService: ActivityService,
    activatedRoute: ActivatedRoute
  ) {
    const activityId = activatedRoute.snapshot.params["activityId"];
    this.activityDetail = activityService.getActivity(activityId);
   }

  ngOnInit() {
  }

  async openModal() {
    const videoModal = await this._modalController.create({
      component: ActivityVideoPage
    });

    return this.activityDetail.subscribe((activity) => {
      videoModal.componentProps = {
        videoDetail: {
          videoURL: activity.video_url,
          videoImage: activity.cropped
        }
      };

      return videoModal.present();
    });
  }

  async addToFavorites() {
    this.activityDetail.subscribe((activity: any) => {
      this._angularFireAuth.authState.subscribe(async (user: any) => {
        if (user) {
          const uid = user.uid;
          const favoritesRef = this._angularFireStore.collection(
            `favorites/${uid}/favorites`,
            (ref) => ref.where('id', '==', activity.id)
          );

          favoritesRef.get().subscribe(async (doc: any) => {
            if (doc.empty) {
              await favoritesRef.add(activity);
              this.showToast(`The activity "${activity.name}" is added to your favorites.`);
            } else {
              this.showToast(`The activity "${activity.name}" was already in your favorites.`);
            }
          });
        }
      });
    });
  }

  async showToast(message: string) {
    const toast = await this._toastController.create({
      message,
      duration: 3000,
      position: 'top',
    });
    await toast.present();
  }
}
