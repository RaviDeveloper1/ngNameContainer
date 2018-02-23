import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NamesComponent } from './names/names.component';
import { NamespaceComponent } from './namespace/namespace.component';


@NgModule({
  declarations: [
    AppComponent,
    NamesComponent,
    NamespaceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
