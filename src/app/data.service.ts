import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User, Article } from "./user.model";

@Injectable({
  providedIn: "root"
})
export class DataService {
  apiUrlArticle = "https://jsonplaceholder.typicode.com/photos";

  apiUrl = "https://jsonplaceholder.typicode.com/users";

  constructor(private _http: HttpClient) {}

  getUsers() {
    return this._http.get<User[]>(this.apiUrl);
  }

  getImage() {
    return this._http.get<Article[]>(this.apiUrlArticle);
  }
}
