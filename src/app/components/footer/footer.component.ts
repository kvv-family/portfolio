import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  constructor(private router: Router) {}

  goPrivacy() {
    this.router.navigate(['privacy']);
  }
}
