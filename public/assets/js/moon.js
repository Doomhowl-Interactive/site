"use strict";
const DONT_LOAD = false;
const SPEED = 1;

let moonTexture;
let glowTexture;

let offsetY = -Math.PI;
let lastSave = 0;

let usedTint = [255, 0, 0];

function setup() {
  const canvas = document.querySelector("#moon");
  createCanvas(400, 400, WEBGL, canvas);
  moonTexture = loadImage("/assets/img/moon.jpg");
  glowTexture = loadImage("/assets/img/glow.png");

  // set angle from last time
  if (sessionStorage && !DONT_LOAD) {
    const angle = sessionStorage.getItem("moon_angle") ?? offsetY.toString();
    try {
      offsetY = parseFloat(angle);
    } catch (e) {
      sessionStorage.removeItem("moon_angle");
      console.warn("Could not parse moon angle from session storage");
    }
  }
}

function addTitleClass(tag) {
  const title = document.querySelector(".title-header");
  if (title) {
    title.classList.add(tag);
  }
}

function calcLampDir() {
  // make sure the light shines on the same side of the moon rotated by offsetY
  return [Math.sin(offsetY), 0, Math.cos(offsetY)];
}

function colAmount(col, scale) {
  return [col[0] * scale, col[1] * scale, col[2] * scale];
}

function draw() {
  background(0, 0, 0, 0);

  tint(...usedTint);
  image(glowTexture, -width / 2, -height / 2, width, height);
  tint(230, 230, 230);

  ambientLight(...colAmount(usedTint, 0.5));
  directionalLight(255, 255, 255, 0, 0, 0, ...calcLampDir());

  noStroke();
  texture(moonTexture);
  offsetY += (deltaTime / 20000) * SPEED;
  rotateY(offsetY);
  sphere(width / 3);

  // load last saved angle, so it doesn't jump around between pages
  // (if we used a SPA, we would not need this)
  if (millis() > lastSave + 500 && sessionStorage) {
    sessionStorage.setItem("moon_angle", offsetY);
    lastSave = millis();
  }
}
