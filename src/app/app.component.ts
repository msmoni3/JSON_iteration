import { Component, VERSION } from "@angular/core";
import data1 from "./data1.json";
import data2 from "./data2.json";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  superHeroes: any = data1;
  superHeroesarray = data2;

  constructor() {
    console.log(this.superHeroes.homeTown);
    console.log(this.superHeroes["members"][0]["powers"][2]);
    console.log(this.superHeroesarray[1]['members'][1]['powers'][2])
  }
}
