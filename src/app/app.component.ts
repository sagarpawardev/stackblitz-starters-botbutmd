import { Component } from '@angular/core';
import { Image, ImageGroup } from '@spartacus/core';
import { Media, MediaContainer, MediaService } from '@spartacus/storefront';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mystore';
  media: | MediaContainer
  | Image
  | ImageGroup
  | ImageGroup[]
  | undefined;

  constructor(private mediaService: MediaService) {
    this.media = {
      altText: 'Some alt text',
      url: 'https://picsum.photos/200/300'
    };
    
    // this.mediaService.getMedia({
    //   container: {
    //     url: 'https://picsum.photos/200/300',
    //     altText: 'Sample Image',
    //   },
    // });;
    // this.mediaService.getMedia({
    //   // This is the minimal structure needed
    //   container: {
    //     url: 'https://example.com/sample.jpg',
    //     altText: 'Sample Image',
    //   },
    // });
  }
}
