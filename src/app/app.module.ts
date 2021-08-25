import { ConvertToSpace } from './product-list/shared/convert-to-space';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/Product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpace
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
