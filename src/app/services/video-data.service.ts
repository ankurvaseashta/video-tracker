import { Injectable } from '@angular/core';
import { Video } from '../constants/videoList';
import { HttpClient } from '@angular/common/http';
const apiUrl = 'https://api.angularbootcamp.com/videos';

@Injectable({
  providedIn: 'root',
})
export class VideoDataService {
  constructor(private http: HttpClient) {}

  loadVideos() {
    return this.http.get<Video[]>(apiUrl);
  }
}
