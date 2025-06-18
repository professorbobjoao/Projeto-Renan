var img01;
var img02;
var x;
var y = 0;

var xP = 50;
var yP = 300;

var pontos = 0;
var colisao = false;
var fimDeJogo = false;

function setup() {
  createCanvas(400, 450);
  img01 = loadImage('174577.jpg');
  img02=loadImage("depositphotos_274071036-stock-photo-happy-young-farmer-or-agronomist.jpg")
  x = random(50, 350);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(img01);

  if (fimDeJogo) {
    background(img02);
    textSize(32);
    fill("white");
    textAlign(CENTER, CENTER);
    text("Fim de Jogo", width / 2, height / 2 - 20);
    textSize(24);
    text("Pontuação Final: " + pontos, width / 2, height / 2 + 20);
    noLoop();
    return;
  }

  textSize(20);
  fill("#ED225D");
  textAlign(LEFT);
  text("Pontos: " + pontos, 10, 20);

  // "C" inimigo (antigo quadrado vermelho)
  textSize(40);
  fill("red");
  text("🌽", x + 20, y + 20); // centraliza o texto no lugar do quadrado
  y = y + 1;

  if (y > 400 || colisao == true) {
    x = random(50, 350);
    y = 0;
    colisao = false;
  }

  // "C" jogador (antigo círculo amarelo)
  fill("#FFC107");
  text("🚜", xP, yP);

  // Colisão
  let c = dist(xP, yP, x + 20, y + 20); // ajustado para centralizar colisão
  if (c < 25) {
    colisao = true;
    pontos++;
    if (pontos >= 10) {
      fimDeJogo = true;
    }
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    xP = xP - 20;
  } else if (keyCode === RIGHT_ARROW) {
    xP = xP + 20;
  } else if (keyCode === UP_ARROW) {
    yP = yP - 20;
  } else if (keyCode === DOWN_ARROW) {
    yP = yP + 20;
  }
}
