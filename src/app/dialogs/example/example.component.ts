import { Component, model, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';
import { GalleriaModule } from 'primeng/galleria';
import { photos } from '../../models/photos';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-example',
  imports: [PanelMenuModule, GalleriaModule, DialogModule],
  templateUrl: './example.component.html',
})
export class ExampleComponent implements OnInit, OnDestroy {
  tab = 0;
  content = photos;
  items: MenuItem[] = [];
  images: string[] = [];
  displayBasic: boolean = false;
  displayDialog: boolean = false;
  titleDialog: string = '';

  ngOnInit() {
    this.items = this.content.map((item) => ({
      label: item.title,
      title: item.name,
      items: item.items.map((item2) => ({
        label: item2.title,
        command: () => this.activeItem(item, item2),
      })),
    }));
  }

  ngOnDestroy(): void {
    this.items = [];
    this.images = [];
  }

  activeItem(base: any, item: any) {
    this.titleDialog = item.title;
    let images: string[] = [];
    for (let index = 0; index < item.photos.length; index++) {
      const element = item.photos[index];
      images.push(`img/examples/photos/${base.name}/${item.name}/${element}`);
    }
    this.images = images;
    this.displayBasic = true;
    this.displayDialog = true;
  }
}
