let r = 0;

let thetaMaxSlider;
let densitySlider;
let thetaMaxValue;
let densityValue;

function setup(){
  createCanvas(700, 700, WEBGL);
  angleMode(DEGREES);
  colorMode(HSB);
  stroke(321, 38, 80);
  strokeWeight(5);
  noFill();

  r = width/4;

  //Create slider!
  thetaMaxValue = createDiv();
  thetaMaxValue.class("valueDisplay");
  thetaMaxSlider = createSlider(0, 180, 180, 1);
  thetaMaxSlider.class("Slider");

  densityValue = createDiv();
  densityValue.class("valueDisplay");
  densitySlider = createSlider(1, 25, 25, 1);
  densitySlider.class("Slider");
}

function draw(){
  background(230, 50, 15);
  orbitControl(4, 4);//Mouse control

  rotateX(65);
  beginShape();
  for(let theta = 0; theta < thetaMaxSlider.value(); theta += 0.5){
    let x = r * sin(theta) * cos(theta*densitySlider.value());
    let y = r * sin(theta) * sin(theta*densitySlider.value());
    let z = r * cos(theta);
    vertex(x, y, z);
  }
  endShape();

  thetaMaxValue.html("theta max value: " + thetaMaxSlider.value());
  densityValue.html("theta density value: " + densitySlider.value());
}
