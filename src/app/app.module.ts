import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AddPostModule } from './add-post';
import { AppComponent } from './app.component';
import { FirstTopicComponent } from './first-topic/first-topic.component';
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import{AngularFireModule} from "@angular/fire/compat";
import { FormsModule } from '@angular/forms';

const firebaseConfig = {
  apiKey: "AIzaSyB4qRf06JfIlsa9cnz7ILcD1j0ZugMZgf8",
  authDomain: "informer-one.firebaseapp.com",
  projectId: "informer-one",
  storageBucket: "informer-one.appspot.com",
  messagingSenderId: "682542257347",
  appId: "1:682542257347:web:126d59bf6c7477fb1b7e76",
  measurementId: "G-G97TLC1FMX"
};


@NgModule({
  declarations: [
    AppComponent,
    FirstTopicComponent,


  ],
  imports: [
    BrowserModule,
    AddPostModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
