import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FieldComponent } from './components/field/field.component';
import { ListDropComponent } from './components/list-drop/list-drop.component';

@NgModule({
  declarations: [
    AppComponent,
    ListDropComponent,
    FieldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
