var raio_numero = 500;
var raio_interno = raio_numero +50;
var raio_externo = raio_interno + 50;
var cx, cy;
var px, py;
var destaque_theta;

function setup() {
    createCanvas(600, 600);
    textAlign(CENTER, CENTER);
    // centro do desenho e do circulo
    cx = width / 2;
    cy = height / 2;
    // ângulo theta para arco de destaque
    // que é o mesmo theta para o ponto p
    destaque_theta = PI * 1.75;
    px = cos(destaque_theta) * raio_numero;
    py = sin(destaque_theta) * raio_numero;
    // corrige p(px,py) para p(px+cx,py+cy);
    px += cx;
    py += cy;
}

function draw() {
    background(255);
    fill(255);
    for (var angulo = 0; angulo <= 360; angulo += 30) {
        // transforma o angulo de
        // coord polar para coord cartesiana
        var x = cos(radians(angulo)) * raio_numero;
        var y = sin(radians(angulo)) * raio_numero;
    
        // desenha uma elipse na coord (x,y)
        // corrige (x,y) para (x+cx,y+cy)
        ellipse(x + cx, y + cy, 50);
      }

    fill(0,0,255, 20);
    ellipse(px, py, 150);
    fill(0);
    ellipse(cx, cy, raio_externo);
    fill(255,0,0);
    ellipse(cx, cy, raio_interno);
    fill(0,255,0);
    ellipse(cx, cy, raio_numero);
}