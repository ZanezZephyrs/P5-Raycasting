class Ray{
    constructor(pos, angle) {
        this.src=pos;
        this.dir=p5.Vector.fromAngle(angle);
    }

    show(){
        stroke(255);
        push();
        translate(this.src.x, this.src.y);
        line(0,0, this.dir.x, this.dir.y);
        pop();
    }

    setDir(x,y){
        this.dir.x=x-this.src.x;
        this.dir.y=y-this.src.y;
        this.dir.normalize();
    }

    cast(wall){
        let x1 = wall.p1.x;
        let y1 = wall.p1.y;

        let x2 = wall.p2.x;
        let y2 = wall.p2.y;

        let x3 = this.src.x;
        let y3 = this.src.y;

        let x4 = this.src.x + this.dir.x;
        let y4 = this.src.y + this.dir.y;

        const den=(x1-x2) * (y3-y4) - (y1-y2) * (x3 - x4);
        if(den==0){
            return;
        }

        const t=((x1-x3) * (y3-y4) - (y1-y3) * (x3 - x4))/den;
        const u= -((x1-x2) *(y1-y3) - (y1-y2) * (x1-x3))/den;

        if(t > 0 && t < 1 && u>0){
            const pt =createVector();
            pt.x=x1+t*(x2-x1);
            pt.y=y1+t*(y2-y1);
            return pt;
        }else{
            return;
        }

    }
}