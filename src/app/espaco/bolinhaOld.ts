export class BolinhaOld {


    static MX = 0;
    static MY = 0;

    x = Math.random() * BolinhaOld.MX;
    y = Math.random() * BolinhaOld.MY;
    cor = 0;
    xo = 0;
    yo = 0;


    vx = 2 - Math.random() * 4;
    vy = 2 - Math.random() * 4;
    tx = 16;
    ty = 16;

    tic() {
        if (this.igual(this.x, this.xo)) {
            this.x = this.xo;
        }
        else {
            this.x += this.vx;
            if (this.x < 0 || this.x > BolinhaOld.MX) {
                this.vx *= -1;
                this.x += this.vx;
            }
        }
        if (this.igual(this.y, this.yo)) {
            this.y = this.yo;
        }
        else {
            this.y += this.vy;
            if (this.y < 0 || this.y > BolinhaOld.MY) {
                this.vy *= -1;
                this.y += this.vy;
            }
        }
        const vMax=2;
        if (this.x>this.xo && this.vx>-vMax){
            this.vx-=.1;
        }
        if (this.x<this.xo && this.vx<vMax){
            this.vx+=.1;
        }
        if (this.y>this.yo && this.vy>-vMax){
            this.vy-=.1;
        }
        if (this.y<this.yo && this.vy<vMax){
            this.vy+=.1;
        }


//        this.vx=this.x>this.xo?-1:1;
  //      this.vy=this.y>this.yo?-1:1;
    }

    igual(a, b) {
        return Math.abs(a - b) < 3;
    }


}