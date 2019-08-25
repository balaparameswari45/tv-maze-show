import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyTvmazeshowComponent } from './my-tvmazeshow/my-tvmazeshow.component';
import { MytvshowService } from './mytvshow/mytvshow.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule,MatToolbarModule } from '@angular/material';
import { ShowSearchComponent } from './show-search/show-search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MyTvmazeshowComponent,
    ShowSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MytvshowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
