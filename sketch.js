	var raioInteno = 200;
  var raioCentro = raioInteno + 70
  var raioExterno = raioCentro + 40
  var cx, cy;
  var destaque_theta;
	var horas=1
function setup() {
  createCanvas(500, 500);
  textAlign(CENTER, CENTER);
  strokeWeight(3);
  cx = width / 2;
  cy = height / 2;
  }

function draw() {
  background(220);
  fill(255)
  ellipse(cx, cy, raioExterno);
  
  fill(255)
  ellipse(cx, cy, raioCentro);
  
  fill(255)
	//ellipse(cx, cy, raioInteno);
  
  fill(0);
  aux=4
  cont=30
  for (var angulo = 0; angulo <= 360; angulo += 30) {

    var x = cos(radians(angulo)) * raioInteno/1.7;
    var y = sin(radians(angulo)) * raioInteno/1.7;

    if(angulo==cont){

    	if (aux==12){
      	textSize(30)
        text(aux, x + cx, y + cy)
        aux=0
        aux+=1
        cont=cont+30
      }
    	else{
        textSize(30)
        text(aux, x + cx, y + cy);
        aux+=1
        cont=cont+30
      }
  	}
	}
  
  
  var x = cos(radians(angulo)) * raioInteno/1.7;
  var y = sin(radians(angulo)) * raioInteno/1.7;
    
  
  ellipse(cx, cy, 20);
  line(y+cy, cy, cx, cy);//horas       
	line(cx, cx-x, cx, cy);//minutos
//line(cimaX, cimaY, baixoX, baixoY);
  
}