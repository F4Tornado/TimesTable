const palette = {
  line: () => {
    return color(c, 100, 100)
  },
  background: () => {
    return color(0, 0, 100);
  }
}
let points = 200;
let multiplier = 0;
let cs = [125, 276]
let c = cs[0];

function setup() {
  colorMode(HSB)
  createCanvas(windowHeight, windowHeight);
  textFont("Ubuntu")
}

function draw() {
  background(palette.background())
  translate(width / 2, height / 2);
  textSize(width / (410 / 11));
  text("x" + round(multiplier * 1000) / 1000, -width / 2.1, -height / 2.2);
  for (let i = 0; i < points; i++) {
    fill(palette.line());
    c = (i / points) * (cs[1] - cs[0]) + cs[0]
    let p = polarToCart([i / points * PI * 2, width * 0.45]);
    let p2 = polarToCart([i / points * PI * 2 * multiplier, width * 0.45]);
    stroke(palette.line());
    strokeWeight(width / (1640 / 3))
    line(p[0], p[1], p2[0], p2[1]);
    noStroke()
    ellipse(p[0], p[1], width / 256, height / 256);
  }
  cs[1] = sin(millis() / 1000) * 100 + 200;
  cs[0] = cs[1] - 100
  multiplier += 0.005
}

function polarToCart(v) {
  return [v[1] * cos(v[0]), v[1] * sin(v[0])];
}