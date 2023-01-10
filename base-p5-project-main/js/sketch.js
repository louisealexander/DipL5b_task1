let x = 0; 
let y = 0;
let theta = 0;
let inc = 0.05;
let offset = 0; //the amount offset from beginning of wave
let amplitude;
let frequency;
let maxAngle;
function setup() {
    amplitude = windowHeight /8;
    frequency = windowWidth /8;
    maxAngle = (windowWidth/frequency) * TWO_PI;
    createCanvas(windowWidth, windowHeight);
}
function draw() {
    background(0);
    noStroke();
    while(theta < maxAngle + offset){
        // sine wave 2
        y = sin(theta - 0.2) * amplitude;
        fill(100, 0, 0);
        ellipse(x, y + height*0.5, 16);
        // sine wave 1
        y = sin(theta) * amplitude;
        fill(255, 0, 0);
        ellipse(x, y + height*0.5, 16);
        // cosine wave
        y = cos(theta) * amplitude;
        fill(212, 255, 0);
        ellipse(x, y + height*0.5, 16);
        theta += 0.2;
        x = ((theta - offset)/maxAngle) * windowWidth;
    }
    offset += inc;
    theta = offset;
}
