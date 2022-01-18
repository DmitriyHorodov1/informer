import { Component, OnInit } from '@angular/core';
import { AddPostService } from '../add-post';

@Component({
  selector: 'app-first-topic',
  templateUrl: './first-topic.component.html',
  styleUrls: ['./first-topic.component.css']
})
export class FirstTopicComponent implements OnInit {

  bodyText: string ="" ;
  title = '';
  content = [];

  constructor( private modalService: AddPostService ) { }

  ngOnInit() {
    this.bodyText = 'This text can be updated in modal 1';
  }
  openModal(id: string) {
    this.modalService.open(id);
    this.title=""
    this.content=[]
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
