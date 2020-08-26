let walls=[];
let ray;
let particle;
let gui;
let gui_obj={
  "randomize walls": createRandomWalls,
  "number of walls": 7,
  "number of rays": 360,
  "color of rays": [255,255,255,1],
  "contact points":false,
  "contact points size":8

}

function createBoardWalls(){
  walls.push(new Boundary(0,0,width,0));
  walls.push(new Boundary(width,0,width,height));
  walls.push(new Boundary(width,height,0,height));
  walls.push(new Boundary(0,height,0,0));

}

function createRandomWalls(){
  walls=[];
  for(let i=0;i<gui_obj["number of walls"];i++){
    let x1=random(width);
    let x2=random(width);
    let y1=random(height);
    let y2=random(height);
    walls.push(new Boundary(x1,y1,x2,y2));
  }
  createBoardWalls();
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  createRandomWalls();
  particle = new Particle();
  gui = new dat.gui.GUI();
  gui.add(gui_obj, 'randomize walls');
  gui.add(gui_obj, 'number of walls').min(0);
  gui.add(gui_obj, 'contact points');
  gui.add(gui_obj, 'contact points size').min(0);
  gui.add(gui_obj, 'number of rays').min(1).max(5000).step(1);
  gui.addColor(gui_obj, 'color of rays');
  //var f1 = gui.addFolder('Colors');
  //f1.addColor(gui_obj, 'color of rays');


}



function draw() {
  background(0);
  for(let wall of walls){
    wall.show();
  }

  particle.update_rays(gui_obj["number of rays"]);
  particle.update(mouseX, mouseY);
  particle.show();
  particle.cast(walls, gui_obj["contact points"],gui_obj["contact points size"], gui_obj["color of rays"]);
  
}