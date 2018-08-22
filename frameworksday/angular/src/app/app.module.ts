import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MyList} from "./components/list/list.component";
import {RequestUsers} from "./api.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    MyList,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [RequestUsers],
  bootstrap: [AppComponent]
})
export class AppModule {}
