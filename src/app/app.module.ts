import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstTopicComponent } from './first-topic/first-topic.component';
import { AddPostPanelComponent } from './add-post-panel/add-post-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstTopicComponent,
    AddPostPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
