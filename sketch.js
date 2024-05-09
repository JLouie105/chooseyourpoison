var gif1, gif2, gif3, gif4, gif5, img1, img2, img3;
let sound1, sound2, sound3, sound4, sound5, sound6, sound7;
let timer; // timer


function preload() {
  gif1 = createImg('ezgif-5-73739abe31.gif','');
  gif2 = createImg('gan.gif','');
  gif3 = createImg('cal.gif','');
  gif4 = createImg('ohmy.gif','');
  gif5 = createImg('damn.gif','');
  img1 = createImg('file.jpg','');
  img2 = createImg('file.png','');
  img3 = loadImage('poison.jpg');
  sound1 = loadSound('punch.wav');
  sound2 = loadSound('loz.mp3');
  sound3 = loadSound('light.mp3');
  sound4 = loadSound('wow_mixdown.mp3');
  sound5 = loadSound('damnnnn.mp3');
  sound6 = loadSound('sound1.wav');
  sound7 = loadSound('sound2.wav');
}

function setup() {
  var canvas = createCanvas(640, 428);
  canvas.parent("portrait");
  setInterval(Timer,1000); // timer
  gif1.hide();
  gif2.hide();
  gif3.hide();
  gif4.hide();
  gif5.hide();
  img1.hide();
  img2.hide();
}

function draw() { //timer
  image(img3,0,0,640,428);
  if (timer == 3) {
    gif1.hide();
    }
  if (timer == 10) {
    gif2.hide();
  }
  if (timer == 6) {
    gif3.hide();
  }
  if (timer == 3) {
    gif4.hide();
  }
  if (timer == 3) {
    gif5.hide();
  }
  if (timer == 3) {
    img1.hide();
  }
  if (timer == 3) {
    img2.hide();
  }
}

function Timer() { // timer
  if (timer >= 0) {
    timer++;
  }
}

function keyPressed() {
  timer = 0; // timer
  if (keyIsDown(UP_ARROW)){ //spacebar = 32, w = 87, a = 65, s = 83, d = 68
    // console.log("hide");
    gif1.show();
    gif1.position(437,181);
    gif1.size(640,428);
    sound1.play();
    sound2.stop();
    sound3.stop(); 
    sound4.stop();
    sound5.stop();
    sound6.stop();
    sound7.stop();
  }
  else {
    gif1.hide();
  }
  
  if (keyIsDown(DOWN_ARROW)) {
    gif2.show();
    gif2.position(437,181);
    gif2.size(640,428);
    sound2.play();
    sound1.stop();
    sound3.stop();
    sound4.stop();
    sound5.stop();
    sound6.stop();
    sound7.stop();
  }
  else {
    gif2.hide();
  }
  
  if (keyIsDown(RIGHT_ARROW)) {
    gif3.show();
    gif3.position(437,181);
    gif3.size(640,428);
    sound3.play();
    sound1.stop();
    sound2.stop();
    sound4.stop();
    sound5.stop();
    sound6.stop();
    sound7.stop();
  }
  else {
    gif3.hide();
  }
  
  if (keyIsDown(LEFT_ARROW)) {
    gif4.show();
    gif4.position(437,181);
    gif4.size(640,428);
    sound4.play();
    sound1.stop();
    sound2.stop();
    sound3.stop();
    sound5.stop();
    sound6.stop();
    sound7.stop();
  }
  else {
    gif4.hide();
  }
  if (keyIsDown(32)) {
    gif5.show();
    gif5.position(437,181);
    gif5.size(640,428);
    sound5.play();
    sound1.stop();
    sound2.stop();
    sound3.stop();
    sound4.stop();
    sound6.stop();
    sound7.stop();
  }
  else {
    gif5.hide();
  }

  if (keyIsDown(87)) {
    img1.show();
    img1.position(437,181);
    img1.size(640,428);
    sound6.play();
    sound1.stop();
    sound2.stop();
    sound3.stop();
    sound4.stop();
    sound5.stop();
    sound7.stop();
  }
  else {
    img1.hide();
  }
  if (keyIsDown(65)) {
    img2.show();
    img2.position(437,181);
    img2.size(640,428);
    sound7.play();
    sound1.stop();
    sound2.stop();
    sound3.stop();
    sound4.stop();
    sound5.stop();
    sound6.stop();
  }
  else {
    img2.hide();
  }
}