import { Component } from '@angular/core';
import { RichComponent } from '../../dialogs/rich/rich.component';
import { Dialog } from 'primeng/dialog';
import { ExampleComponent } from '../../dialogs/example/example.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  imports: [Dialog, RichComponent, ExampleComponent, CommonModule],
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent {
  visibleRichDialog = false;
  visiblePhotoDialog = false;
  constructor() {}

  openRichDialog() {
    this.visibleRichDialog = true;
  }

  openPhotoDialog() {
    this.visiblePhotoDialog = true;
  }

  showPhotoDialog(event: Dialog) {
    event.maximize();
  }
}
