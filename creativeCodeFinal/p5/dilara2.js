/*
 vcds2106s20
 creative coding
 final project version2
 dilara merve kaçmaz
*/

let song;
let img1;
let img2;
let img3;
let lightX, lightY;
let paperX, paperY;
let phoneX, phoneY;

let randomNumber;
let j;
let unit;
let previousSecond;

let mic;

function preload() {
  song = loadSound('assets/digitalism-miamiShowdown.mp3');
  font = loadFont('assets/SpaceMonoRegular.ttf');
  img1 = loadImage('assets/room.png');
  img2 = loadImage('assets/room2.png');
  img3 = loadImage('assets/paper.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight)

  lightX = width / 2 + 330;
  lightY = height / 2 + 50;

  phoneX = width / 2 + 100;
  phoneY = height / 2 + 100;

  paperX = width / 2 - 110;
  paperY = height / 2 + 240;

  unit = 7;
  j = 0;

  previousSecond = second();

  mic = new p5.AudioIn();
  mic.start();

}
var i = 0;

function draw() {
  background(0);
  imageMode(CENTER)

  i = i + 4;
  if (i % 20 === 0) {
    image(img1, width / 2, height / 2);
  } else {
    image(img2, width / 2, height / 2);
  }

  noStroke();
  noFill();
  rect(lightX, lightY, 30, 140);
  rect(phoneX, phoneY, 55, 30);
  rect(paperX, paperY, 55, 30);


  if (dist(mouseX, mouseY, lightX + 10, lightY + 50) <= 100 / 2) {
    noStroke();
    fill(1, 0, 1, 200);
    rect(width / 2 - 400, height / 2 - 300, 800, 600);

  }

  //windows
  let d = map(mic.getLevel(), 0, 0.1, 7, 15);
  for (let x = width / 2 - 58; x <= width - 520; x += 50) { //rects
    for (let y = height / 2 - 275; y <= height - 275; y += 50) {
      fill('#00fff8');
      rect(x, y, d, d);
    }
  }

  if (dist(mouseX, mouseY, phoneX + 20, phoneY + 30) <= 70 / 2) {

    stroke('#00fff8');
    strokeWeight(1.5);
    fill(1, 0, 1, 245);
    rect(width / 2 - 200, height / 2 - 100, 400, 150);

    noStroke();
    fill('#00fff8');
    textFont(font);
    textSize(18);
    let a = '“Digital design is like painting, except the paint never dries.” ';
    text(a, width / 2 - 180, height / 2 - 80, 400, 200);

    let b = '-Neville Brody';
    text(b, width / 2 - 180, height / 2 - 10, 1200, 200);
  }


  if (dist(mouseX, mouseY, paperX + 10, paperY + 50) <= 100 / 2) {
    noStroke();
    fill(1, 0, 1, 200);
    rect(width / 2 - 400, height / 2 - 300, 800, 600);
    image(img3, width / 2, height / 2);

    noStroke();
    fill('#000000');
    textFont(font);
    textSize(12);
    let c = 'hello future self. hope you’re alive, and well. because right now I’m not. I’m worried about my life and my loved ones. so, if you are alive remember these days, be kind to your self and your loved ones. because you only live ones.';
    text(c, width / 2 - 70, height / 2 - 130, 130, 250);

    textSize(10);
    let d = '-me from 2020';
    text(d, width / 2 - 70, height / 2 + 120, 130, 250);
  }

  ///////// 10 print ////////////
  frameRate(5);
  for (let y = height / 2 - 40; y < height / 2 + 95; y += unit) { //height/2-40
    for (let x = width / 2 + 200; x < width / 2 + 220; x += unit) { //width/2+200
      stroke('#66f2cd');
      strokeWeight(1);
      if (random(0, 1) < 0.2)
        line(x, y, x + unit, y + unit); // topleft2bottomright
      else
        line(x, y + unit, x + unit, y); // bottomleft2topright
    }
    j = 0;
  }

  for (let y = height / 2 - 38; y < height / 2 + 105; y += unit) { //height/2-40
    for (let x = width / 2 + 221; x < width / 2 + 240; x += unit) { //width/2+200
      stroke('#66f2cd');
      strokeWeight(1);
      if (random(0, 1) < 0.2)
        line(x, y, x + unit, y + unit); // topleft2bottomright
      else
        line(x, y + unit, x + unit, y); // bottomleft2topright
    }
    j = 0;
  }

  for (let y = height / 2 - 36; y < height / 2 + 115; y += unit) { //height/2-40
    for (let x = width / 2 + 242; x < width / 2 + 260; x += unit) { //width/2+200
      stroke('#66f2cd');
      strokeWeight(1);
      if (random(0, 1) < 0.2)
        line(x, y, x + unit, y + unit); // topleft2bottomright
      else
        line(x, y + unit, x + unit, y); // bottomleft2topright
    }
    j = 0;
  }

  for (let y = height / 2 - 34; y < height / 2 + 125; y += unit) { //height/2-40
    for (let x = width / 2 + 263; x < width / 2 + 280; x += unit) { //width/2+200
      stroke('#66f2cd');
      strokeWeight(1);
      if (random(0, 1) < 0.2)
        line(x, y, x + unit, y + unit); // topleft2bottomright
      else
        line(x, y + unit, x + unit, y); // bottomleft2topright
    }
    j = 0;
  }
}

function mousePressed() {
  if (song.isPlaying()) {
    song.stop();
  } else {
    song.play();
    song.loop();
  }
}
