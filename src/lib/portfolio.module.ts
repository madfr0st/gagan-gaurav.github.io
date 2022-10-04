import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppConfig } from 'src/config/app.config';
import { WallComponent } from 'src/lib/wall/wall.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { FlawsComponent } from './flaws/flaws.component';



@NgModule({
  declarations: [
    WallComponent, ProjectsComponent, BlogsComponent, SkillsComponent, FlawsComponent
  ],
  imports: [
    BrowserModule, CommonModule,
  ],
  providers: [AppConfig],
  bootstrap: []
})
export class PortfolioModule { }
