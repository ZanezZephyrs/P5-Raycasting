class Particle{
    constructor(){
        this.pos = createVector(width /2, height/2);
        this.rays=[];
        for(let a=0;a<360;a+=1){
            this.rays.push(new Ray(this.pos,radians(a)));
        }
    }

    update_rays(number_of_rays){
        this.rays=[];
        for(let a=0;a<360;a+=360/number_of_rays){
            this.rays.push(new Ray(this.pos,radians(a)));
        }
    }

    update(x,y){
        this.pos.x=x;
        this.pos.y=y;
    }

    cast(walls, contact_point,contact_point_size=8, color=[255]){
        let R=parseInt(color[0])
        let G=parseInt(color[1])
        let B=parseInt(color[2])

        for(let ray of this.rays){
            let record = Infinity;
            let closest= null;
            for(let wall of walls){
                const pt=ray.cast(wall);
                if(pt){
                    const d=p5.Vector.dist(this.pos, pt);
                    if(d<record){
                        record=d;
                        closest=pt;
                    } 
                }
            }
            if(closest){
                stroke(R,G,B);
                line(this.pos.x,this.pos.y,closest.x,closest.y);
                if(contact_point==true){
                    ellipse(closest.x,closest.y,contact_point_size)
                }

            }
        }
    }

    show(){
        fill(255);  
        ellipse(this.pos.x, this.pos.y, 4);
        // for(let i=0;i<this.rays.length;i++){
        //     this.rays[i].show();
        // }
    }
}