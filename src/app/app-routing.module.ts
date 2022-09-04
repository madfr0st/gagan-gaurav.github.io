import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from 'src/lib/blogs/blogs.component';
import { ProjectsComponent } from 'src/lib/projects/projects.component';
import { WallComponent } from 'src/lib/wall/wall.component';

const routes: Routes = [
  { path: "", component: WallComponent},
  { path: "projects", component: ProjectsComponent},
  { path: "blogs", component: BlogsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
