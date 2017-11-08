
export class Bolinha {
    
    x=0;
    y=0;
    alvoX=0;
    alvoY=0;
    alvoXO=0;
    alvoYO=0;
    origemX=0;
    origemY=0;
    v=0;
    a=0;
    b=0;
    chegou=false;
    velocidade=5;
    vx=0;
    vy=0;
    tipo=0;
    px=0;
    py=0;
    tx = 16;
    ty = 16;
    
    
    constructor(oX,oY,aX,aY) {
        this.chegou=false;
        this.alvoX=aX;
        this.alvoY=aY;
        this.alvoXO=aX;
        this.alvoYO=aY;

        this.origemX=oX;
        this.origemY=oY;
        if (this.alvoX<this.origemX){ //se VX tem que ser negativa;
            this.vx=-1;           
        } else{
            this.vx= 1;
        }
        if (this.alvoY<this.origemY){ //se VY tem que ser negativa;
            this.vy=-1;           
        } else{
            this.vy= 1;
        }        
        this.origemX*=this.vx;
        this.alvoX*=this.vx;
        this.origemY*=this.vy;
        this.alvoY*=this.vy;
        if (Math.abs(this.alvoY-this.origemY)>Math.abs(this.alvoX-this.origemX)){ //Se tem que andar mais em Y do que em X
            this.tipo=1;
            this.a=this.alvoX-this.origemX;
            this.b=this.origemY-this.alvoY;
            this.v=2*this.a+this.b;
        } else{
            this.tipo=0;
            this.a=this.alvoY-this.origemY;
            this.b=this.origemX-this.alvoX;
            this.v=2*this.a+this.b;            
        }
        this.x=this.origemX;
        this.y=this.origemY;
        this.px=this.x*this.vx;
        this.py=this.y*this.vy;
    }
    
     tick(){
        if (this.tipo==0){
            if ((this.x<this.alvoX)){ 
                this.x+=this.velocidade;
                if (this.v<=0){
                    this.v=this.v+2*this.a;
                } else{
                    this.v=this.v+2*(this.a+this.b);
                    this.y+=this.velocidade;
                }
            } else{
                this.chegou=true;
            }
        } else{
            if ((this.y<this.alvoY)){ //||(y>alvoY&&vy<0)
                this.y+=this.velocidade;
                if (this.v<=0){
                    this.v=this.v+2*this.a;
                } else{
                    this.v=this.v+2*(this.a+this.b);
                    this.x+=this.velocidade;
                }
            } else{
                this.chegou=true;
            }
        }
        this.px=this.x*this.vx;
        this.py=this.y*this.vy;
        if (this.chegou){
            this.px=this.alvoXO;
            this.py=this.alvoYO;
        }
    }
}