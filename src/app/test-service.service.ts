import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor(private http:HttpClient) { }

  baseurl = 'http://localhost:3000/'
  getName(){
    return this.http.get(this.baseurl+'name')
  }
}
