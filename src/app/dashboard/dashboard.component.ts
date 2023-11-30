import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VideoListComponent} from "./video-list/video-list.component";
import {VideoPlayerComponent} from "./video-player/video-player.component";
import {StatsFiltersComponent} from "./stat-filters/stat-filters.component";
import {Video} from "../constants/videoList";
import {combineLatest, map, Observable, tap} from "rxjs";
import {VideoDataService} from "../services/video-data.service";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, VideoListComponent, VideoPlayerComponent, StatsFiltersComponent ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export default class DashboardComponent {

  // videoListData : Observable<Video[] |undefined>
  // selectedVideo :Video | undefined

  videoListData : Observable<Video[] |undefined>
  selectedVideo : Observable<Video | undefined>
  selectedVideoId : Observable<string | null>;

  // constructor(videoSvc:VideoDataService) {
  //   this.videoListData = videoSvc.loadVideos().pipe(tap((data)=>{
  //     if (data) {
  //       this.selectedVideo = data[0]
  //     }}));
  // }

  constructor(videoSvc:VideoDataService,private router:Router, activatedRoute:ActivatedRoute) {
    this.videoListData = videoSvc.loadVideos();
    this.selectedVideoId = activatedRoute.queryParamMap.pipe(
      map(params => params.get('videoId')),
    );
    this.selectedVideo = combineLatest([this.videoListData,this.selectedVideoId]).pipe(
      map(([videoList,videoId])=>{
        return videoList?.find((video)=>video.id === videoId) ?? undefined
      })
    )
  }

  // handleVideoChanged(video:Video){
  //   this.selectedVideo = video;
  // }

  handleVideoChanged(video:Video){
    void this.router.navigate([],{queryParams:{videoId:video.id}})
  }
}
