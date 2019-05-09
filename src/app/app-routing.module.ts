import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './containers/main/main.component';
import { GalleryComponent } from './containers/gallery/gallery.component';
import { ProjectsComponent } from './containers/projects/projects.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'photography', component: GalleryComponent },
  { path: 'projects', component: ProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
