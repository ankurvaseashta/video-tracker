import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Video} from "../../constants/videoList";

@Component({
  selector: 'app-video-thumbnail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.scss']
})
export class VideoThumbnailComponent {
  @Input({required:true}) video?:Video;
}
