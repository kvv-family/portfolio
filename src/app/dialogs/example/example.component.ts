import { Component, model, OnInit } from '@angular/core';
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
export class ExampleComponent implements OnInit {
  tab = 0;
  content = photos;
  items: MenuItem[] = [];
  images = [];
  displayBasic: boolean = false;
  displayDialog: boolean = false;
  titleDialog: string = '';

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
    this.titleDialog = item.title;
    this.images = item.photos;
    this.displayBasic = true;
    this.displayDialog = true;
  }
}
