import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { A2sCommModule } from 'a2s-comm';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpaceModule } from './space/space.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SpaceModule,
    BrowserModule,
    AppRoutingModule,
    A2sCommModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
