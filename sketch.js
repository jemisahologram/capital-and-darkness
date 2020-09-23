let img
let cnv

function preload() {
  img = loadImage('images/header.jpg')
  image(img,0,0)
}

function setup() {
  let cnv = createCanvas(windowWidth, 0.182 * windowWidth)
  cnv.position(0,0)
  // image(img,0,0)
}

function draw() {
  if (mouseIsPressed) {
    stroke(5)
    c = img.get(mouseX, mouseY)
    c = color(c)
    c.setAlpha(50)
    fill(c)
    ellipse(mouseX, mouseY, (random(7,900)))
  } else {
  noStroke()
  c = img.get(mouseX, mouseY)
  c = color(c)
  c.setAlpha(50)
  fill(c)
  ellipse(mouseX, mouseY, (random(7,90)))
}
}

function windowResized() {
  resizeCanvas(windowWidth, 0.182 * windowWidth);
}
