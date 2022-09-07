import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AppConfig } from 'src/config/app.config';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public HOME: string = "home";
  public PROJECT: string = "project";
  public BLOG: string = "blog";
  public CARD: string = "card";


  public mouseHoldHome: boolean = false; // for button
  public mouseHoldProject: boolean = false; // for project
  public mouseHoldBlog: boolean = false; // for blogs
  public mouseHoldCard: boolean = false; // for card

  public initialWidth = 0; // initial size of window

  public insideHome: boolean = false;
  public homeX2: number = 0;
  public homeY2: number = 0;

  public insideProject: boolean = false;
  public projectX2: number = 0;
  public projectY2: number = 0;

  public insideBlog: boolean = false;
  public blogX2: number = 0;
  public blogY2: number = 0;


  public cardVisible: boolean = false;
  public cardX1: number = 0;
  public cardY1: number = 0;
  public cardX2: number = 0;
  public cardY2: number = 0;
  public initialCardHeight = 0;
  public insideMenubar: boolean = false;
  public startTime: number = 0;
  public endTime: number = 0;

  public data: any;

  
  constructor(public router: Router, public config: AppConfig) { 
    this.initialWidth = window.innerWidth;
    console.log(config.homeX1, config.homeY1);
    if(config.homeX1 == undefined) config.homeX1 = window.innerWidth - 100;
    if(config.homeY1 == undefined) config.homeY1 = 50;

    if(config.projectX1 == undefined) config.projectX1 = window.innerWidth - 100;
    if(config.projectY1 == undefined) config.projectY1 = 130;

    if(config.blogX1 == undefined) config.blogX1 = window.innerWidth - 100;
    if(config.blogY1 == undefined) config.blogY1 = 210;

    this.cardY1= 100;
    this.cardX1 = (window.innerWidth - 1400) / 2; // (width - 1500) / 2

    this.loadData();
  }

  ngOnInit(): void {
  }

  async loadData(){
    const url: string = "http://127.0.0.1:8000/lol/portfolio/";
    const options = {
            method: 'GET',
          };

    await fetch(url, options)
    .then(response => response.json())
    .then((data) => {
      console.log(data[0].body);
      this.data = data[0].body;
    })
    .catch((err) => {
      console.log(err);
    });
  }

  // this maintains the position of button with respect to right side, when window size is changing.
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.config.homeX1 -= this.initialWidth - window.innerWidth;
    this.config.projectX1 -= this.initialWidth - window.innerWidth;
    this.config.blogX1 -= this.initialWidth - window.innerWidth;
    this.initialWidth = window.innerWidth;
  }


  // listen to the mouseclick is pressed.
  @HostListener('document:mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    event.preventDefault();
    this.startTime = Date.now();
    // console.log(event.clientX);

    if(this.insideHome){
      this.mouseHoldHome = true;
      this.homeX2 = event.clientX;
      this.homeY2 = event.clientY;
    }

    if(this.insideProject){
      this.mouseHoldProject = true;
      this.projectX2 = event.clientX;
      this.projectY2 = event.clientY;
    }

    if(this.insideBlog){
      this.mouseHoldBlog = true;
      this.blogX2 = event.clientX;
      this.blogY2 = event.clientY;
    }

    if(this.insideMenubar){
      this.mouseHoldCard = true;
      this.cardX2 = event.clientX;
      this.cardY2 = event.clientY;
    }
  }

  // when mouse click is released.
  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    // console.log(event);
    event.preventDefault();
    this.endTime = Date.now();
    // this.mouseHold = true;
    this.mouseHoldBlog = false;
    this.mouseHoldHome = false;
    this.mouseHoldProject = false;
    this.mouseHoldCard = false;
  }

  // when mouse is moving.
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    event.preventDefault();

    if(this.mouseHoldHome && this.insideHome){
      this.config.homeX1 += event.clientX - this.homeX2;
      this.config.homeY1 += event.clientY - this.homeY2;
      this.homeX2 = event.clientX;
      this.homeY2 = event.clientY;
    }

    if(this.mouseHoldProject && this.insideProject){
      this.config.projectX1 += event.clientX - this.projectX2;
      this.config.projectY1 += event.clientY - this.projectY2;
      this.projectX2 = event.clientX;
      this.projectY2 = event.clientY;
    }

    if(this.mouseHoldBlog && this.insideBlog){
      this.config.blogX1 += event.clientX - this.blogX2;
      this.config.blogY1 += event.clientY - this.blogY2;
      this.blogX2 = event.clientX;
      this.blogY2 = event.clientY;
    }

    if(this.mouseHoldCard && this.insideMenubar){
      this.cardX1 += event.clientX - this.cardX2;
      this.cardX2 = event.clientX;
      this.cardY1 += event.clientY - this.cardY2;
      this.cardY2 = event.clientY;
    }
  }

  // when mouse is inside the div.
  mouseOver(value: any){
    if(value == "home")this.insideHome = true;
    else if(value == "project") this.insideProject = true;
    else if(value == "blog") this.insideBlog = true;
    else if(value == "card") this.insideMenubar = true;
  }

  // when mouse is outsider the div.
  mouseOut(value: any){
    if(value == "home" && this.mouseHoldHome == false) this.insideHome = false;
    else if(value == "project" && this.mouseHoldProject == false) this.insideProject = false;
    else if(value == "blog" && this.mouseHoldBlog == false) this.insideBlog = false;
    else if(value == "card" && this.mouseHoldCard == false) this.insideMenubar = false; 
  }


  flipCard(value: string) {
    var time = this.endTime - this.startTime;
    if(time < 150 && value == "home") {
      console.log(this.config.homeX1, this.config.homeY1);
      this.router.navigate([""]);
    }else if(time < 150 && value == "blog"){
      this.router.navigate(["blogs"]);
    }else if(time < 150) this.cardVisible = !this.cardVisible; // if the click is fast then only perform the flip.
    // console.log(this.cardVisible);
  }
}
