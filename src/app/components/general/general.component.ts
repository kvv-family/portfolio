import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { AboutDetailComponent } from '../about-detail/about-detail.component';
import { CertificatesComponent } from '../certificates/certificates.component';
import { FooterComponent } from '../footer/footer.component';
import { FormComponent } from '../form/form.component';
import { HeaderComponent } from '../header/header.component';
import { JobComponent } from '../job/job.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ServicesComponent } from '../services/services.component';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'app-general',
  imports: [
    AboutComponent,
    AboutDetailComponent,
    CertificatesComponent,
    FooterComponent,
    FormComponent,
    HeaderComponent,
    JobComponent,
    PortfolioComponent,
    ServicesComponent,
    TitleComponent,
  ],
  templateUrl: './general.component.html',
})
export class GeneralComponent {}
