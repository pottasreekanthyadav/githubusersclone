import { Component, OnInit } from "@angular/core";
import { Services } from "./services";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "githubuser";
  public res: any = "";
  public users: any = "";

  ngOnInit() {
    this.getgithubUses();
  }
  constructor(private serviceobj: Services) {}

  public getgithubUses() {
    this.res = this.serviceobj.getUsers();
    this.res.subscribe(data => {
      this.users = data;
      this.globalusers = data;
      console.log(this.users);
    });
  }
  filterdUsers;
  globalusers;
  public filter(e) {
    console.log(e.target.value);
    let search = e.target.value;
    if (search.length >= 2) {
      var a = this.users.filter(users =>
        users.login.toLowerCase().includes(search.toLowerCase())
      );
      this.users = a;
    } else {
      this.users = this.globalusers;
    }
  }
}
