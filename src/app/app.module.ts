import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnoComponent } from './components/uno/uno.component';
import { ColorDirective } from './libs/directivas/color.directive';
import { DinamyColorDirective } from './libs/directivas/dinamy-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    UnoComponent,
    ColorDirective,
    DinamyColorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
