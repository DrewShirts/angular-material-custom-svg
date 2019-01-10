import { Component } from '@angular/core';
import { PdfIconService } from './services/pdf-icon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private pdfIconService: PdfIconService
  ) {

    // using service to register pdf icons
    this.pdfIconService.init();

  }

}
