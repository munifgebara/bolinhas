import { Component, OnInit } from '@angular/core';
import { BolinhaOld } from './bolinhaOld';

@Component({
  selector: 'app-espaco',
  templateUrl: './espaco.component.html',
  styleUrls: ['./espaco.component.css']
})
export class EspacoOldComponent implements OnInit {
  N = 100;
  TX = window.innerWidth - 20;
  TY = window.innerHeight - 20;
  bolinhas: BolinhaOld[];
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

    BolinhaOld.MX = this.TX;
    BolinhaOld.MY = this.TY;
    this.bolinhas = [];
    this.initBolinhas();

    let paint = <HTMLCanvasElement>document.getElementById('canvas');
    let ctx = paint.getContext('2d');
    this.ctx = ctx;
    //this.cortaImagem();
    //    setInterval(() => {
    this.moveBolinhas();
    //},10);


  }

  cortaImagem() {
    for (var x = 0; x < 10; ++x) {
      for (var y = 0; y < 10; ++y) {
        let im=this.ctx.createImageData(5,5);
        let d=im.data;
        for (let i=0;i<4*5*5;i+=4){
          d[i]=0;
          d[i+1]=0;
          d[i+2]=0;
          d[i+3]=255;
        }
        this.imagePieces.push(im);
      }
    }
  }

  initBolinhasOld() {
    let x = 0;
    let y = 0;
    for (let i = 0; i < this.N; i++) {
      let b = new BolinhaOld();
      b.x = x;
      b.y = y;
      b.vx = 1;
      b.vy = 1;
      b.cor = 0;
      this.bolinhas.push(b);
      x += 16;
      if (x >= 160) {
        x = 0;
        y += 16;
      }
    }
  }

  initBolinhas() {
    let x = 0;
    let y = 0;
    for (let i = 0; i < this.N; i++) {
      let b = new BolinhaOld();
      //b.x = x+500;
      //b.y = y+100;
      b.xo = x+500;
      b.yo = y+100;

      b.vx = (x-80)/50;
      b.vy = (y-10)/50;
      b.cor = 0;
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
        this.bolinhas[i].tic();
      }
      //ctx.beginPath();
      //ctx.ellipse(this.bolinhas[i].x, this.bolinhas[i].y, 4, 4, 0, 0, 2 * Math.PI);
      //
      //ctx.putImageData(id, this.bolinhas[i].x, this.bolinhas[i].y);
      //ctx.putImageData(this.imagePieces[i], this.bolinhas[i].x, this.bolinhas[i].y);


      ctx.drawImage(this.image, x, y, 16, 16, this.bolinhas[i].x, this.bolinhas[i].y, this.bolinhas[i].tx, this.bolinhas[i].ty) ;

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
