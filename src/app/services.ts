import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

/*import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';*/

@Injectable()
export class Services {
  constructor(private http: HttpClient) {}

  public getUsers() {
    return this.http.get("https://api.github.com/users");
  }
}
