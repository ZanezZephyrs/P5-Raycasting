let walls=[];
let ray;
let particle;

function createBoardWalls(){
  walls.push(new Boundary(0,0,width,0));
  walls.push(new Boundary(width,0,width,height));
  walls.push(new Boundary(width,height,0,height));
  walls.push(new Boundary(0,height,0,0));

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  for(let i=0;i<7;i++){
    let x1=random(width);
    let x2=random(width);
    let y1=random(height);
    let y2=random(height);
    walls.push(new Boundary(x1,y1,x2,y2));
  }
  createBoardWalls();
  particle = new Particle();
}



function draw() {
  background(0);
  for(let wall of walls){
    wall.show();
  }
  // ray.show();  
  particle.update(mouseX, mouseY);
  particle.show();
  particle.cast(walls);
  // ray.setDir(mouseX, mouseY);

  // let pt=ray.cast(wall);
  // if(pt){
  //   fill(255);
  //   ellipse(pt.x, pt.y, 8, 8)
  // }
}