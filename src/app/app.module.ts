import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { PdfIconService } from './services/pdf-icon.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MatIconModule, HttpClientModule],
  providers: [
    PdfIconService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
