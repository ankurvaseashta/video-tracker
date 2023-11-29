import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VideoListComponent} from "./video-list/video-list.component";
import {VideoPlayerComponent} from "./video-player/video-player.component";
import {StatsFiltersComponent} from "./stat-filters/stat-filters.component";
import {Video} from "../constants/videoList";
import {Observable, tap} from "rxjs";
import {VideoDataService} from "../services/video-data.service";
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, VideoListComponent, VideoPlayerComponent, StatsFiltersComponent ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export default class DashboardComponent {


  videoListData : Observable<Video[] |undefined>
  selectedVideo :Video | undefined

  constructor(videoSvc:VideoDataService) {
    this.videoListData = videoSvc.loadVideos().pipe(tap((data)=>{
      if (data) {
        this.selectedVideo = data[0]
      }}));
  }

  handleVideoChanged(video:Video){
    this.selectedVideo = video;
  }
}
