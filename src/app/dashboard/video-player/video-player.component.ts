import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Video } from '../../constants/videoList';
import { VideoThumbnailComponent } from '../video-thumbnail/video-thumbnail.component';

@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [CommonModule, VideoThumbnailComponent],
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
})
export class VideoPlayerComponent {
  @Input({ required: true }) video?: Video;
}
