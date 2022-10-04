import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, HostListener} from '@angular/core';
import { Router } from '@angular/router';
import { AppConfig} from 'src/config/app.config';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss']
})

export class WallComponent implements OnInit {

  public HOME: string = "home";
  public PROJECT: string = "project";
  public BLOG: string = "blog";
  public SKILL: string = "skill";
  public FLAW: string = "flaw";
  public CARD: string = "card";

  public homeFolderUrl : string = "/assets/images/buttons/home/ggn111.png";
  public projectFolderUrl : string = "/assets/images/buttons/cloudClosedFolder.png";
  public blogFolderUrl : string = "/assets/images/buttons/cloudClosedFolder.png";
  public skillFolderUrl : string = "/assets/images/buttons/cloudClosedFolder.png";
  public flawFolderUrl : string = "/assets/images/buttons/cloudClosedFolder.png";


  public mouseHoldHome: boolean = false; // for button
  public mouseHoldProject: boolean = false; // for project
  public mouseHoldBlog: boolean = false; // for blogs
  public mouseHoldSkill: boolean = false; // for skills
  public mouseHoldFlaw: boolean = false; // for flaws
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

  public insideSkill: boolean = false;
  public skillX2: number = 0;
  public skillY2: number = 0;

  public insideFlaw: boolean = false;
  public flawX2: number = 0;
  public flawY2: number = 0;

  public cardVisible: boolean = true;
  public cardX1: number = 0;
  public cardY1: number = 0;
  public cardX2: number = 0;
  public cardY2: number = 0;
  public initialCardHeight = 0;
  public insideMenubar: boolean = false;
  public startTime: number = 0;
  public endTime: number = 0;

  
  constructor(public router: Router, public config: AppConfig) { 
    this.initialWidth = window.innerWidth;
    console.log(config.homeX1, config.homeY1);
    if(config.homeX1 == undefined) config.homeX1 = window.innerWidth - 100;
    if(config.homeY1 == undefined) config.homeY1 = 50;

    if(config.projectX1 == undefined) config.projectX1 = window.innerWidth - 100;
    if(config.projectY1 == undefined) config.projectY1 = 140;  // 50 + 90

    if(config.blogX1 == undefined) config.blogX1 = window.innerWidth - 100;
    if(config.blogY1 == undefined) config.blogY1 = 230; // 140 + 90

    if(config.skillX1 == undefined) config.skillX1 = window.innerWidth - 100;
    if(config.skillY1 == undefined) config.skillY1 = 320;

    if(config.flawX1 == undefined) config.flawX1 = window.innerWidth - 100;
    if(config.flawY1 == undefined) config.flawY1 = 410;

    this.cardY1= 150;
    this.cardX1 = (window.innerWidth - 700) / 2; // (width - 700) / 2
  }

  ngOnInit(): void {
  }

  // this maintains the position of button with respect to right side, when window size is changing.
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.config.homeX1 -= this.initialWidth - window.innerWidth;
    this.config.projectX1 -= this.initialWidth - window.innerWidth;
    this.config.blogX1 -= this.initialWidth - window.innerWidth;
    this.config.skillX1 -= this.initialWidth - window.innerWidth;
    this.config.flawX1 -= this.initialWidth - window.innerWidth;
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

    if(this.insideSkill){
      this.mouseHoldSkill = true;
      this.skillX2 = event.clientX;
      this.skillY2 = event.clientY;
    }

    if(this.insideFlaw){
      this.mouseHoldFlaw = true;
      this.flawX2 = event.clientX;
      this.flawY2 = event.clientY;
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
    this.mouseHoldFlaw = false;
    this.mouseHoldSkill = false;
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

    if(this.mouseHoldSkill && this.insideSkill){
      this.config.skillX1 += event.clientX - this.skillX2;
      this.config.skillY1 += event.clientY - this.skillY2;
      this.skillX2 = event.clientX;
      this.skillY2 = event.clientY;
    }

    if(this.mouseHoldFlaw && this.insideFlaw){
      this.config.flawX1 += event.clientX - this.flawX2;
      this.config.flawY1 += event.clientY - this.flawY2;
      this.flawX2 = event.clientX;
      this.flawY2 = event.clientY;
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
    else if(value == "skill") this.insideSkill = true;
    else if(value == "flaw") this.insideFlaw = true;
  }

  // when mouse is outsider the div.
  mouseOut(value: any){
    if(value == "home" && this.mouseHoldHome == false) this.insideHome = false;
    else if(value == "project" && this.mouseHoldProject == false) this.insideProject = false;
    else if(value == "blog" && this.mouseHoldBlog == false) this.insideBlog = false;
    else if(value == "card" && this.mouseHoldCard == false) this.insideMenubar = false;
    else if(value == "skill" && this.mouseHoldSkill == false) this.insideSkill = false;
    else if(value == "flaw" && this.mouseHoldFlaw == false) this.insideFlaw = false;
  }

  
  flipCard(value: string) {
    var time = this.endTime - this.startTime;
    if(time < 150 && value == "project") {
      console.log(this.config.homeX1, this.config.homeY1);
      this.router.navigate(["projects"]);
    }else if(time < 150 && value == "blog"){
      this.router.navigate(["blogs"]);
    }else if(time < 150 && value == "skill"){
      this.router.navigate(["skills"]);
    }else if(time < 150 && value == "flaw"){
      this.router.navigate(["flaws"]);
    }else if(time < 150) {
      this.cardVisible = !this.cardVisible; // if the click is fast then only perform the flip.
    // console.log(this.cardVisible);
    }
  }
}
