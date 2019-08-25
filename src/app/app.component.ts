import { Component } from "@angular/core";
import { IShowInfo } from "./ishow-info";
import { MytvshowService } from './mytvshow/mytvshow.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "TvMazeShow";

  showInfo: IShowInfo;

  constructor(private mytvshowService: MytvshowService){}

  doSearch(searchValue) {
    const userInput = searchValue;
    this.mytvshowService
      .getmytvshow(userInput)
      .subscribe(data => this.showInfo=data);
  }
}
