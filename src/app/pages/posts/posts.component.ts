import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:any = [];

  constructor(private readonly dataService: DataService) { }

  ngOnInit() {
    this.posts = this.dataService.getPosts()
      // .subscribe(x=> {
      //   this.posts = x;
      //   console.log(this.posts);
      // });
  }

  listenClick(id: Number){
    console.log('Id: ', id);

  }

}
