import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NotFoundComponent} from './shared/components/not-found/not-found.component';
import {HttpClientModule} from "@angular/common/http";
import {InputComponent} from "./shared/components/input/input.component";
import {ToastComponent} from "./shared/components/toast/toast.component";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InputComponent,
    ToastComponent
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
