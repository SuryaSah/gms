import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './homeComponent/index';
import { Component1 } from './component1/index';
import { Component2 } from './component2/index';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    Component1,
    Component2,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
