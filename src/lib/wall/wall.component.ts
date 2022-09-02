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
  public x1: number = 10;
  public y1: number = 10;
  public x2: number = 0;
  public y2: number = 0;
  
  constructor(public router: Router) { 
  }

  ngOnInit(): void {
  }

  // listen to the mouseclick is pressed.
  @HostListener('document:mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    console.log(event.screenX);
    this.mouseHold = true;
    if(this.mouseHold && this.insideHome){
      this.x2 = event.screenX;
      this.y2 = event.screenY;
    }
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    // console.log(event.screenX);
    // this.mouseHold = true;
    this.mouseHold = false;
    this.insideHome = false;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    console.log(event.screenX, event.screenY);
    if(this.mouseHold && this.insideHome){
      this.x1 += event.screenX - this.x2;
      this.y1 += event.screenY - this.y2;
      this.x2 = event.screenX;
      this.y2 = event.screenY;
    }
    // this.mouseHold = true;
  }

  mouseOver(){
    console.log("mosuerover");
    this.insideHome = true;
  }

  viewCard() {
  //   console.log("working");
  //   this.router.navigate(['app-card']);

  }
}
