import { Component, model, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';
import { GalleriaModule } from 'primeng/galleria';
import { photos } from '../../models/photos';
@Component({
  selector: 'app-example',
  imports: [PanelMenuModule, GalleriaModule],
  templateUrl: './example.component.html',
})
export class ExampleComponent implements OnInit {
  tab = 0;
  content = photos;
  items: MenuItem[] = [];
  images = [];
  displayBasic: boolean = false;
  responsiveOptions: any[] = [];

  ngOnInit() {
    this.items = this.content.map((item) => ({
      label: item.title,
      items: item.items.map((item) => ({
        label: item.title,
        command: () => this.activeItem(item),
      })),
    }));
  }

  activeItem(item: any) {
    this.images = item.photos;
    this.displayBasic = true;
  }
}
