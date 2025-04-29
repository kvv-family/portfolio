import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-rich',
  imports: [CarouselModule],
  templateUrl: './rich.component.html',
})
export class RichComponent {
  items = [
    { image: 'img/examples/rich/автодержатель.webp', name: 'автодержатель' },
    { image: 'img/examples/rich/grinder.webp', name: 'болгарка' },
    { image: 'img/examples/rich/микрофон.webp', name: 'микрофон' },
  ];

  responsiveOptions: any[] | undefined;
}
