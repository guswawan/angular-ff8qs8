import { Component } from "@angular/core";
import { User, Article } from "./user.model";
import { DataService } from "./data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
// export class AppComponent {
//   title = 'socialNetwork';
// }
export class AppComponent {
  users$: User[];
  articles$: Article[];

  constructor(private dataService: DataService) {}

  getImage() {
    return this.dataService
      .getImage()
      .subscribe(data => (this.articles$ = data));
  }

  getUser() {
    return this.dataService.getUsers().subscribe(data => (this.users$ = data));
  }

  ngOnInit() {
    this.getUser();
    this.getImage();
  }
}
