import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Grid} from "../model/grid.model";

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:3000/';

  getData() {
    return this.http.get<Grid[]>(this.baseUrl+ 'grid');
  }

}
