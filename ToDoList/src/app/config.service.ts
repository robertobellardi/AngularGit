import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private htpp: HttpClient) { }

  url = 'http://localhost:4000';

  getList(){
    return this.htpp.get(this.url+"/lista");
  }

  postInsertItem(obj){
    return this.htpp.post(this.url+"/lista",obj);
  }

  getUsers(){
    return this.htpp.get(this.url+"/login");
  }
}
