import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  public showTrending: boolean = false;
  public showMyBlogs: boolean = false;
  public showAddBlogs: boolean = true;

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  ngOnInit(): void {

  }

  trending(){
    this.showTrending = true;
    this.showAddBlogs = false;
    this.showMyBlogs = false;
  }

  myblogs(){
    this.showTrending = false;
    this.showAddBlogs = false;
    this.showMyBlogs = true;
  }

  addblogs(){
    this.showTrending = false;
    this.showAddBlogs = true;
    this.showMyBlogs = false;
  }

  title = '';
  htmlContent = '';

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '24rem',
    minHeight: '8rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };

  post(){
    
  }
}
