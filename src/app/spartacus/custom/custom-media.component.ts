import { Component, Input } from '@angular/core';
import { MediaComponent } from '@spartacus/storefront';

@Component({
  selector: 'vrv-custom-media',
  templateUrl: './custom-media.component.html',
})
export class CustomMediaComponent extends MediaComponent {
  @Input() title: string | undefined;
}
