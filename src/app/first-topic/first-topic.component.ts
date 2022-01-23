import { Component, OnInit } from '@angular/core';
import { AddPostService } from '../add-post';
import {Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {UUID} from 'uuid-generator-ts';
@Component({
  selector: 'app-first-topic',
  templateUrl: './first-topic.component.html',
  styleUrls: ['./first-topic.component.css']
})
export class FirstTopicComponent implements OnInit {

  bodyText: string ="" ;
  title = '';
  content = [];
  ErrorInput: String ="";
  posts: Observable<any[]> | undefined;

  constructor( private modalService: AddPostService,  public db:AngularFirestore ) {
    this.posts = db.collection('posts').valueChanges();
  }

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
  async addPost(){

    if(this.title !='' && this.content !=[]){
      this.ErrorInput=""
      const uuid = new UUID();
      var id : string = uuid.getDashFreeUUID();


      this.db.collection('posts').doc(id).set({
        title : this.title,
        content:this.content,

        Id :  id
      });
    }
    else{
      console.log("Error Input")
      this.ErrorInput = "Please Input title and content"

    }
  }
}

