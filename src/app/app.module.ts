import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { WelcomeComponent } from "./home/welcome.component";
import {PageNotFoundComponent} from "./products/not-found.component";
import {ProductModule} from "./products/product.module";
import {AppRoutingModule} from "./shared/app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
