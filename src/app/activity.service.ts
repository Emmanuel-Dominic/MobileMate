import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  constructor(private _httpCient: HttpClient) { }

  getActivity(activityId: string){
    return this._httpCient.get(`${API_URL}/id/${activityId}`);
  }

  getAllActivity(){
    return this._httpCient.get(API_URL);
  }
}

const API_URL = "https://orangevalleycaa.org/api/videos";
