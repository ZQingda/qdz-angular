import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './containers/gallery/gallery.component';
import { MainComponent } from './containers/main/main.component';
import { ProjectsComponent } from './containers/projects/projects.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    MainComponent,
    ProjectsComponent,
    SidemenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
