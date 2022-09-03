import { Component, OnInit, HostListener} from '@angular/core';
import {Router } from '@angular/router';
import { AppConfig } from 'src/config/app.config';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss']
})

export class WallComponent implements OnInit {

  public mouseHold: boolean = false;
  public onHome: boolean = false;
  public insideHome: boolean = false;
  public x1: number = 0; // left
  public y1: number = 0; // top
  public x2: number = 0;
  public y2: number = 0;
  public initialWidth = 0;
  public initialHeight = 0;
  
  constructor(public router: Router) { 
    this.initialHeight = window.innerHeight;
    this.initialWidth = window.innerWidth;
    this.x1 = window.innerWidth - 100;
    this.y1 = 50;
  }

  ngOnInit(): void {
  }

  // this maintains the position of button with respect to right side, when window size is changing.
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.x1 -= this.initialWidth - window.innerWidth;
    this.initialWidth = window.innerWidth;
  }


  // listen to the mouseclick is pressed.
  @HostListener('document:mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    console.log(event.clientX);
    this.mouseHold = true;
    if(this.mouseHold && this.insideHome){
      this.x2 = event.clientX;
      this.y2 = event.clientY;
    }
  }

  // when mouse click is released.
  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    console.log(event);
    // this.mouseHold = true;
    this.mouseHold = false;
    this.insideHome = false;
  }

  // when mouse is moving.
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    // console.log(event.screenX, event.screenY);
    if(this.mouseHold && this.insideHome){
      this.x1 = this.x1 + event.clientX - this.x2;
      this.x2 = event.clientX;
      this.y1 = this.y1 + event.clientY - this.y2;
      this.y2 = event.clientY;
    }
    // this.mouseHold = true;
  }

  // when mouse is inside the div.
  mouseOver(){
    console.log("mosuerover");
    this.insideHome = true;
  }

  viewCard() {
  //   console.log("working");
  //   this.router.navigate(['app-card']);
  }
}
