import { Component, Input, OnInit } from "@angular/core";
import { IShowInfo } from "../ishow-info";

@Component({
  selector: "app-my-tvmazeshow",
  templateUrl: "./my-tvmazeshow.component.html",
  styleUrls: ["./my-tvmazeshow.component.css"]
})
export class MyTvmazeshowComponent implements OnInit {

  @Input() show:IShowInfo
  //constructor() fires first - allocates memory
  constructor() {
    
  }

  //ngOnInit() fires next after constructor()
  //initializes memory with data
  //subscribe() listens for changes
  ngOnInit() {

  }
}
