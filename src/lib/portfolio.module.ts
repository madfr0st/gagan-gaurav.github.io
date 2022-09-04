import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppConfig } from 'src/config/app.config';
import { WallComponent } from 'src/lib/wall/wall.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ProjectsComponent } from './projects/projects.component';



@NgModule({
  declarations: [
    WallComponent, ProjectsComponent, BlogsComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [AppConfig],
  bootstrap: []
})
export class AppModule { }
