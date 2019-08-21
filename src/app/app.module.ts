import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyTvmazeshowComponent } from './my-tvmazeshow/my-tvmazeshow.component';
import { MytvshowService } from './mytvshow/mytvshow.service';


@NgModule({
  declarations: [
    AppComponent,
    MyTvmazeshowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MytvshowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
