import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Video } from "../../constants/videoList";
import {VideoThumbnailComponent} from "../video-thumbnail/video-thumbnail.component";

@Component({
  selector: 'app-video-list',
  standalone: true,
  imports: [CommonModule, VideoThumbnailComponent],
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent {

  @Input({required:true}) videoList! : Video[]
  @Output() videoChanged = new EventEmitter<Video>();

  selectedVideo?:Video;

  selectVideo(video:Video){
    this.selectedVideo = video
    this.videoChanged.emit(video);
  }
}
