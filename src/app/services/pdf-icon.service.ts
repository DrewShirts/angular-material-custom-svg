import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { Injectable } from '@angular/core';

@Injectable()
export class PdfIconService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}
  init() {
    this.matIconRegistry.addSvgIcon(
      'printer',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/printer.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'zoom-in',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/zoom-in.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'zoom-out',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/zoom-out.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'zoom-to-height',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/zoom-to-height.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'zoom-to-width',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/zoom-to-width.svg')
    );
  }
}
