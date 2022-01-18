import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AddPostModule } from './add-post';
import { AppComponent } from './app.component';
import { FirstTopicComponent } from './first-topic/first-topic.component';



@NgModule({
  declarations: [
    AppComponent,
    FirstTopicComponent,


  ],
  imports: [
    BrowserModule,
    AddPostModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
