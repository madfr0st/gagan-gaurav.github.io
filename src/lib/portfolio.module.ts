import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { AppConfig } from 'src/config/app.config';
import { WallComponent } from 'src/lib/wall/wall.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { FlawsComponent } from './flaws/flaws.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    WallComponent, ProjectsComponent, BlogsComponent, SkillsComponent, FlawsComponent, LoginComponent, SignupComponent
  ],
  imports: [
    HttpClientModule, FormsModule, CommonModule, RouterModule.forChild([])
  ],
  providers: [AppConfig, { provide: APP_BASE_HREF, useValue: '/' }, CookieService],
  exports: [ProjectsComponent, WallComponent, SkillsComponent, BlogsComponent, SignupComponent, LoginComponent],
  bootstrap: []
})
export class PortfolioModule { }
