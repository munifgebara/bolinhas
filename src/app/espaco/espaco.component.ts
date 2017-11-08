import { Component, OnInit } from '@angular/core';
import { Bolinha } from './bolinha';

@Component({
  selector: 'app-espaco',
  templateUrl: './espaco.component.html',
  styleUrls: ['./espaco.component.css']
})
export class EspacoComponent implements OnInit {
  N = 100;
  TX = window.innerWidth - 20;
  TY = window.innerHeight - 20;
  bolinhas: Bolinha[];
  canvas: HTMLCanvasElement;
  cc: CanvasRenderingContext2D;
  ctx;
  image;
  imagePieces = [];
  movendo=true;
  constructor() { }


  ngOnInit() {
    this.image = new Image();
    this.image.src = 'eu.jpg';

    this.bolinhas = [];
    this.initBolinhas();

    let paint = <HTMLCanvasElement>document.getElementById('canvas');
    let ctx = paint.getContext('2d');
    this.ctx = ctx;
    this.moveBolinhas();
  }

  initBolinhas() {
    let x = 0;
    let y = 0;
    for (let i = 0; i < this.N; i++) {
      let b = new Bolinha(i%2==0?0:this.TX,i%5==0?0:this.TY,x+500,y+100);
      //b.x = x+500;
      //b.y = y+100;
      this.bolinhas.push(b);
      x += 16;
      if (x >= 160) {
        x = 0;
        y += 16;
      }
    }
  }


  moveBolinhas() {
    let ctx = this.ctx;
    ctx.clearRect(0, 0, this.TX, this.TY);
    let x=0;
    let y=0;

    for (let i = 0; i < this.N; i++) {
      if (this.movendo) {
        this.bolinhas[i].tick();
      }
      ctx.drawImage(this.image, x, y, 16, 16, this.bolinhas[i].px, this.bolinhas[i].py, this.bolinhas[i].tx, this.bolinhas[i].ty) ;
      x+=16;
      if (x>=160){
        x=0;
        y+=16;
      }
    }
    requestAnimationFrame(() => {
      this.moveBolinhas();
    })
  }

 clicou(e){
   console.log(e);
   this.bolinhas=[];
   this.initBolinhas();
   //this.movendo=!this.movendo;
 }



}
