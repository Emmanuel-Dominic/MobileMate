import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Activity } from './types';


@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  constructor(private _httpCient: HttpClient) { }

  getActivity(activityId: string): Observable<Activity> {
    return this._httpCient.get<Activity>(`${API_URL}/id/${activityId}`);
  }

  getAllActivities(): Observable<Activity[]>{
    return this._httpCient.get<Activity[]>(API_URL);
  }
}

const API_URL = "https://orangevalleycaa.org/api/videos";
