
var cosmo=0;

//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas 
}

//The draw function happens over and over again
function draw() {
  background(145, mouseX, 235); //an RGB color for the canvas' background
  //circle
  stroke(6, 23, 250 ) // an RGB color for the circle's border
  strokeWeight(10)
  fill(random(5,255),245,random(94,250),6); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(300,100,cosmo,cosmo); // center of canvas, 20px dia
  cosmo=cosmo+3

  
  fill(181, 101, 26 );//brown
  stroke(252, 187, 126 );
  strokeWeight(2);
  ellipse(cosmo,mouseY,100,100);
  stroke(0);
  
  
  noStroke(0);
  fill(238, 248, 248 )
  ellipse(mouseX, mouseY, 30,30);
  fill (241, 250, 249 )
  ellipse (30,75,58,20,86,75)
  fill(247, 19, 83);//red
  triangle(30,75,58,20,86,75);
  
  
}

function mousePressed() {
if (cosmo>= 150) {
  cosmo=0;
} else {
  cosmo=cosmo+5;
}

  
}