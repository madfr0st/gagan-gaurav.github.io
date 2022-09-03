import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, HostListener} from '@angular/core';
import {Router } from '@angular/router';
import { AppConfig } from 'src/config/app.config';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss']
})

export class WallComponent implements OnInit {

  public mouseHold1: boolean = false; // for button
  public mouseHold2: boolean = false; // for card
  public insideHome: boolean = false;
  public x1: number = 0; // left
  public y1: number = 0; // top
  public x2: number = 0;
  public y2: number = 0;
  public initialWidth = 0;
  public cardVisible: boolean = false;
  public cardX1: number = 0;
  public cardY1: number = 0;
  public cardX2: number = 0;
  public cardY2: number = 0;
  public initialCardHeight = 0;
  public insideMenubar: boolean = false;

  
  constructor(public router: Router) { 
    this.initialWidth = window.innerWidth;
    this.x1 = window.innerWidth - 100;
    this.y1 = 50;
    // this.cardY1= window.innerHeight;
    // this.cardX1 = window.innerWidth / 5;
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
    // console.log(event.clientX);
    // this.mouseHold = true;
    if(this.insideHome){
      this.mouseHold1 = true;
      this.x2 = event.clientX;
      this.y2 = event.clientY;
    }

    if(this.insideMenubar){
      this.mouseHold2 = true;
      this.cardX2 = event.clientX;
      this.cardY2 = event.clientY;
    }
  }

  // when mouse click is released.
  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    console.log(event);
    // this.mouseHold = true;
    this.mouseHold1 = false;
    this.mouseHold2 = false;
    this.insideHome = false;
    this.insideMenubar = false;
  }

  // when mouse is moving.
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    console.log(this.mouseHold2);
    if(this.mouseHold1 && this.insideHome){
      this.x1 += event.clientX - this.x2;
      this.x2 = event.clientX;
      this.y1 += event.clientY - this.y2;
      this.y2 = event.clientY;
    }

    if(this.mouseHold2 && this.insideMenubar){
      this.cardX1 += event.clientX - this.cardX2;
      this.cardX2 = event.clientX;
      this.cardY1 += event.clientY - this.cardY2;
      this.cardY2 = event.clientY;
    }


    // this.mouseHold = true;
  }

  // when mouse is inside the div.
  mouseOver(){
    // console.log("mosuerover");
    this.insideHome = true;
  }

  // mouseOut(){
  //   if(this.mouseHold == false) this.insideHome = false;
  // }

  mouseOverMenubar(){
    this.insideMenubar = true;
  }

  // mouseOutMenubar(){
  //   if(this.mouseHold == false) this.insideMenubar = false;
  // }


  flipCard() {
    // console.log(this.cardVisible);
    this.cardVisible = !this.cardVisible;
    // console.log(this.cardVisible);
  }
}
