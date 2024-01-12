import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import httpmodules
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// ngmodel
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
