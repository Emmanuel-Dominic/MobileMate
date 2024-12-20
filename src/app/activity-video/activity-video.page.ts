import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-activity-video',
  templateUrl: './activity-video.page.html',
  styleUrls: ['./activity-video.page.scss'],
})
export class ActivityVideoPage implements OnInit {
  videoURL: string;
  videoImage: string;

  constructor(navParams: NavParams, private _modalController: ModalController) {
    const { videoURL, videoImage } = navParams.get("videoDetail");
    this.videoURL = videoURL;
    this.videoImage = videoImage;

  }

  ngOnInit() {
  }

  closeModal() {
    this._modalController.dismiss();
  }
}
