import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input('post') post;
  @Output('postClick') postClickEmmit = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  postClick = ()=>{
    this.postClickEmmit.emit(this.post.id);
  };

}
