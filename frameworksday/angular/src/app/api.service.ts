import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class RequestUsers {
  constructor(private http: HttpClient) {}

  getUsers() {
    const url = 'http://easycode-js.herokuapp.com/test';
    return this.http.get(url)
  }
}
