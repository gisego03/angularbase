import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private readonly httpClient: HttpClient) { }

  getPosts(){
    return this.httpClient.get<any>('https://jsonplaceholder.typicode.com/posts');
  }
}
