import { Component, OnInit } from "@angular/core";
import { IShowInfo } from "../ishow-info";
import { MytvshowService } from "../mytvshow/mytvshow.service";

@Component({
  selector: "app-my-tvmazeshow",
  templateUrl: "./my-tvmazeshow.component.html",
  styleUrls: ["./my-tvmazeshow.component.css"]
})
export class MyTvmazeshowComponent implements OnInit {
  show:IShowInfo
  //constructor() fires first - allocates memory
  constructor(private myTvShowService: MytvshowService) {}

  //ngOnInit() fires next after constructor()
  //initializes memory with data
  //subscribe() listens for changes
  ngOnInit() {
    this.myTvShowService
      .getmytvshow("SpongeBob")
      .subscribe(data => (this.show = data));
  }
}
