var video = document.querySelector('.video-yt');
var xMinBotao = 138
var larguraBotao = 223
var xMaxBotao = xMinBotao + larguraBotao
var yMinBotao = 271
var alturaBotao = 30
var yMaxBotao = yMinBotao + alturaBotao

var yMinBotao2 = yMaxBotao + 9
var yMaxBotao2 = yMinBotao2 + 30

var yMinBotao3 = yMaxBotao2 + 9
var yMaxBotao3 = yMinBotao3 + 30

var qtdQuestoes = 0;
var vidas = 3;




var tela = 0;
// tela 0: menu
// tela 1: instruções
// tela 2: créditos
// tela 3: play
// tela 4: fases
// tela 5: pergunta 1
// tela 6: pergunta 2
// tela 7: pergunta 3
// tela 8: pergunta 4
// tela 9: pergunta 5
// tela 10: pergunta 6
// tela 11: pergunta 7
// tela 12: pergunta 8
// tela 13: bom trabalho
// tela 20: tente novamente

function telaMenu() {
  background(imageminicio);
  textSize(25);
  fill("FFFFFF");
  text("Nome do Jogo", 160, 225);
  fill(73, 4, 66);
  rect(xMinBotao, yMinBotao, larguraBotao, alturaBotao, 10);
  rect(138, 310, 223, 30, 10);
  rect(138, 349, 223, 30, 10);


  rect(xMinBotao, yMinBotao, larguraBotao, alturaBotao, 10);
  rect(xMinBotao, yMinBotao2, larguraBotao, alturaBotao, 10);
  rect(xMinBotao, yMinBotao3, larguraBotao, alturaBotao, 10);

  if (keyIsDown(ENTER)) { //play
    tela = 3
  }

  if (keyIsDown(SHIFT)) { //creditos
    tela = 2
  }

  if (keyIsDown(CONTROL)) { //instrucoes
    tela = 1
  }

  textSize(15);
  fill(255, 255, 255);
  textStyle(BOLD);
  text("Play", xMinBotao + 90, 290);
  text("Créditos", xMinBotao + 80, 330);
  text("Instruções", xMinBotao + 70, 370);

}

function telaInstrucoes() {
  background(imageminstruções);
  if (keyIsDown(LEFT_ARROW)) { //volta para a tela inicial ←
    tela = 0
  }
}




function telaCreditos() {
  background(imagemdecréditos);
  textSize(9);
  textStyle(NORMAL);
  fill(244, 243, 243);
  text("Unidas com o objetivo de contribuir para a formação de humanos mais conscientes sobre si e o mundo que vivem.", 22, 410, 460);
  textStyle(BOLD);
  textSize(10);
  fill(141, 141, 141);
  text("Ana Augusta Rangel", 47, 262, 108);
  text("Isabelelle dos Santos", 198, 262, 108);
  text("Larissa de Alcântara", 350, 262, 108);
  textStyle(NORMAL);
  textSize(9);
  text("Graduanda em Ciências e Tecnologia pela UFRN.", 51, 279, 110);
  text("Programadora", 51, 301, 110);
  text("Pesquisadora sobre Literatura Infanto-Juvenil na perspectiva antirracista", 202, 279, 110);
  text("Graduanda em Ciências e Tecnologia pela UFRN.", 354, 279, 110);
  text("Programadora", 354, 301, 110);

  // if (mouseX > 20 && mouseX < 50 && mouseY > 10 && mouseY < 50) {
  //   if (mouseIsPressed)
  //     tela = 0
  // }

  if (keyIsDown(LEFT_ARROW)) { //volta para a tela inicial ←
    tela = 0
  }
}




function telaPlay() {


  background(imagemintrodução);
  noStroke()
  fill(30, 0, 27);
  rect(78, 84, 345, 282, 10);
  fill(73, 4, 66);
  rect(78, 326, 345, 40, 0, 0, 10, 10);
  textSize(10);
  textStyle(BOLD);
  fill("#FFFFFF");
  text("PRÓXIMO", 225, 340, 420);
  textStyle(NORMAL);
  text("Nosso lema é não deixar ningém para trás e pensando globalmete e agindo localmente. Aperte próximo para continuar", 92, 120, 300)
  textSize(15);
  textStyle(BOLD);
  text("Geração do Amanhã,", 90, 100, 420);

  if (keyIsDown(LEFT_ARROW)) { // volta para a tela inicial ←
    tela = 0
  }

  // if (mouseX > 0 && mouseX < 30 && mouseY > 0 && mouseY < 30) {
  //   fill("#FFFFFF")
  //   image(seta, 0, 0, 15, 15)
  //   image(seta, 0, 0, 15, 15)
  //   rect(0, 0, 15, 15);
  //   image(seta, 0, 0, 15, 15)
  //   if (mouseIsPressed)
  //     tela = 0
  // }

  if (keyIsDown(RIGHT_ARROW)) { //próximo →
    tela = 4
  }

  fill("#FFFFFF")
  rect(78, 326, 345, 40, 0, 0, 10, 10);
  textSize(10);
  textStyle(BOLD);
  fill(73, 4, 66);
  text("PRÓXIMO", 225, 340, 420);

  // if (mouseX > 78 && mouseX < 345 + 78 && mouseY > 326 && mouseY < 326 + 40) {
  //   fill("#FFFFFF")
  //   rect(78, 326, 345, 40, 0, 0, 10, 10);
  //   textSize(10);
  //   textStyle(BOLD);
  //   fill(73, 4, 66);
  //   text("PRÓXIMO", 225, 340, 420);
  //   if (mouseIsPressed)
  //     tela = 4
  // }


}

function telaFases() {
  
  background(imagemfases);

  
  

  noStroke()
  fill(30, 0, 27);
  rect(78, 84, 345, 282, 10);
  fill(73, 4, 66);
  rect(78, 326, 345, 40, 0, 0, 10, 10);
  textSize(10);
  textStyle(BOLD);
  fill("#FFFFFF");
  text("PRÓXIMO", 225, 340, 420);
  textStyle(NORMAL);
  text("Nosso lema é não deixar ningém para trás e pensando globalmete e agindo localmente. Aperte próximo para continuar", 92, 120, 300)
  textSize(15);
  textStyle(BOLD);
  text("Geração do Amanhã,", 90, 100, 420);

  fill("#FFFFFF")
  rect(0, 0, 15, 15);
  image(imagemdavídeo2, 100, 150, 300, 170)
 
  if (keyIsDown(DOWN_ARROW)) { //voltar para a tela 3 ↓
    tela = 3
  }

  // if (mouseX > 20 && mouseX < 50 && mouseY > 10 && mouseY < 50) {
  //   fill("#FFFFFF")
  //   rect(0, 0, 15, 15);
  //   if (mouseIsPressed) {
  //     tela = 3
  //   }
  // }

  if (keyIsDown(UP_ARROW)) { //ir para a tela 5 ↑
    tela = 5
  }

  fill("#FFFFFF")
  rect(78, 326, 345, 40, 0, 0, 10, 10);
  textSize(10);
  textStyle(BOLD);
  fill(73, 4, 66);
  text("PRÓXIMO", 225, 340, 420);


  // if (mouseX > 78 && mouseX < 345 + 78 && mouseY > 326 && mouseY < 326 + 40) {
  //   fill("#FFFFFF")
  //   rect(78, 326, 345, 40, 0, 0, 10, 10);
  //   textSize(10);
  //   textStyle(BOLD);
  //   fill(73, 4, 66);
  //   text("PRÓXIMO", 225, 340, 420);
  //   if (mouseIsPressed)
  //     tela = 5
  // }
}

function telaP1() {
  background(imagempergunta1);
  textSize(10);
  textStyle(BOLD);
  fill(199, 33, 47);
  text("Sobre qual Objetivos de Desenvolvimento Sustentável(ODS) você acabou de assistir?", 110, 80, 265)

  textSize(9);
  textStyle(NORMAL);
  fill(141, 141, 141);
  text("a - errado Educação de qualidade ", 110, 260, 265)
  text("b - certo Erradicação da pobreza ", 110, 300, 265)
  text("c - errado Fome zero e agricultura susteentável", 110, 340, 265)
  text("d - errado Vida na água", 110, 380, 265)
  
  if (keyIsDown(65)) { //a
    vidas--
    tela = 6
  }

  else if (keyIsDown(66)) { //b
    tela = 6
    qtdQuestoes++
  }

  else if (keyIsDown(67)) { //c
    vidas--
    tela = 6
  }

  else if (keyIsDown(68)) { //d
    vidas--
    tela = 6
  }

  //só para aparecer quando passar o mouse por cima
  if (mouseX > 102 && mouseX < 102 + 300 && mouseY > 249 && mouseY < 249 + 26) {
    fill(236, 201, 201);
    rect(101, 249, 300, 26, 5);
    fill(0);
    text("a - errado Educação de qualidade ", 110, 260, 265)
  }

  if (mouseX > 102 && mouseX < 102 + 300 && mouseY > 290 && mouseY < 290 + 26) {
    fill(236, 201, 201);
    rect(101, 290, 300, 26, 5);
    fill(0);
    text("b - certo Erradicação da pobreza ", 110, 300, 265)
  }
  if (mouseX > 102 && mouseX < 102 + 300 && mouseY > 331 && mouseY < 331 + 26) {
    fill(236, 201, 201);
    rect(101, 331, 300, 26, 5);
    fill(0);
    text("c - errado Fome zero e agricultura susteentável", 110, 340, 265)
  }

  if (mouseX > 102 && mouseX < 102 + 300 && mouseY > 372 && mouseY < 372 + 26) {
    fill(236, 201, 201);
    rect(101, 372, 300, 26, 5);
    fill(0);
    text("d - errado Vida na água", 110, 380, 265)
  }

}

function telaP2() {
  background(imagempergunta2);
  textSize(10);
  textStyle(BOLD);
  fill(199, 33, 47);
  text("O que significa erradicação da pobreza?", 110, 80, 265)

  textSize(9);
  textStyle(NORMAL);
  fill(141, 141, 141);
  text("e - errado aumentar a pobreza ", 110, 260, 265)
  text("f - errado acabar com a pobreza em todas as formas, mas não em todos lugares", 110, 300, 265)
  text("g - certo acabar com a pobreza em todas as formas, em todos os lugares", 110, 340, 265)
  text("h - errado aumentar a desigualdade", 110, 380, 265)

  
  if (keyIsDown(69)) { //e
    vidas--
    tela = 7
  }

  else if (keyIsDown(70)) { //f
    tela = 7
    vidas--
  }

  else if (keyIsDown(71)) { //g
    qtdQuestoes++
    tela = 7
  }

  else if (keyIsDown(72)) { //h
    vidas--
    tela = 7
  }

  //só para aparecer quando passar o mouse por cima
  if (mouseX > 102 && mouseX < 102 + 300 && mouseY > 249 && mouseY < 249 + 26) {
    fill(236, 201, 201);
    rect(101, 249, 300, 26, 5);
    fill(0);
    text("e - errado aumentar a pobreza ", 110, 260, 265)
  }

  if (mouseX > 102 && mouseX < 102 + 300 && mouseY > 290 && mouseY < 290 + 26) {
    fill(236, 201, 201);
    rect(101, 290, 300, 26, 5);
    fill(0);
    text("f - errado acabar com a pobreza em todas as formas, mas não em todos lugares", 110, 300, 265)
  }
  if (mouseX > 102 && mouseX < 102 + 300 && mouseY > 331 && mouseY < 331 + 26) {
    fill(236, 201, 201);
    rect(101, 331, 300, 26, 5);
    fill(0);
    text("g - certo acabar com a pobreza em todas as formas, em todos os lugares", 110, 340, 265)
  }

  if (mouseX > 102 && mouseX < 102 + 300 && mouseY > 372 && mouseY < 372 + 26) {
    fill(236, 201, 201);
    rect(101, 372, 300, 26, 5);
    fill(0);
    text("h - errado aumentar a desigualdade", 110, 380, 265)
  }

}

function telaP3() {
  background(imagempergunta3);
  textSize(10);
  textStyle(BOLD);
  fill(199, 33, 47);
  text("Sobre acesso a internet", 110, 80, 265)

  textSize(9);
  textStyle(NORMAL);
  fill(141, 141, 141);
  text("i - errado todo mundo tem acesso", 110, 260, 265)
  text("j - errado independente da situação, qualquer pessoa poder ter um celular", 110, 300, 265)
  text("k - errado não há lugares sem eletricidade", 110, 340, 265)
  text("l - certo cerca de 15% não tem nem eletricidade! nem todo mundo tem acesso. ", 110, 380, 265)

  
  if (keyIsDown(73)) { //i
    vidas--
    tela = 8
  }

  else if (keyIsDown(74)) { //j
    tela = 8
    vidas--
  }

  else if (keyIsDown(75)) { //k
    vidas--
    tela = 8
  }

  else if (keyIsDown(76)) { //l
    qtdQuestoes++
    tela = 8
  }
  
  //só para aparecer quando passar o mouse por cima
  if (mouseX > 102 && mouseX < 102 + 300 && mouseY > 249 && mouseY < 249 + 26) {
    fill(236, 201, 201);
    rect(101, 249, 300, 26, 5);
    fill(0);
    text("i - errado todo mundo tem acesso", 110, 260, 265)
  }

  if (mouseX > 102 && mouseX < 102 + 300 && mouseY > 290 && mouseY < 290 + 26) {
    fill(236, 201, 201);
    rect(101, 290, 300, 26, 5);
    fill(0);
    text("j - errado independente da situação, qualquer pessoa poder ter um celular", 110, 300, 265)
  }
  if (mouseX > 102 && mouseX < 102 + 300 && mouseY > 331 && mouseY < 331 + 26) {
    fill(236, 201, 201);
    rect(101, 331, 300, 26, 5);
    fill(0);
    text("k - errado não há lugares sem eletricidade", 110, 340, 265)
  }

  if (mouseX > 102 && mouseX < 102 + 300 && mouseY > 372 && mouseY < 372 + 26) {
    fill(236, 201, 201);
    rect(101, 372, 300, 26, 5);
    fill(0);
    text("l - certo cerca de 15% não tem nem eletricidade! nem todo mundo tem acesso. ", 110, 380, 265)
  }

}

function telaP4() {
  background(imagempergunta4);
  textSize(10);
  textStyle(BOLD);
  fill(199, 33, 47);
  text("Até quando devemos resolver essa situação?", 110, 80, 265)

  textSize(9);
  textStyle(NORMAL);
  fill(141, 141, 141);
  text("m - errado não devemos resolver", 110, 260, 265)
  text("n - errado não tem como ser feito, porque não tem alimento para todos", 110, 300, 265)
  text("o - errado situação assim não existe", 110, 340, 265)
  text("p - certo até o ano de 2030, precisamos nos unir desde já para acabar com isso!", 110, 380, 265)

  
  if (keyIsDown(77)) { //m
    vidas--
    tela = 9
  }

  else if (keyIsDown(78)) { //n
    tela = 9
    vidas--
  }

  else if (keyIsDown(79)) { //o
    vidas--
    tela = 9
  }

  else if (keyIsDown(80)) { //p
    qtdQuestoes++
    tela = 9
  }
  
  //só para aparecer quando passar o mouse por cima
  if (mouseX > 102 && mouseX < 102 + 300 && mouseY > 249 && mouseY < 249 + 26) {
    fill(236, 201, 201);
    rect(101, 249, 300, 26, 5);
    fill(0);
    text("m - errado não devemos resolver", 110, 260, 265)
  }

  if (mouseX > 102 && mouseX < 102 + 300 && mouseY > 290 && mouseY < 290 + 26) {
    fill(236, 201, 201);
    rect(101, 290, 300, 26, 5);
    fill(0);
    text("n - errado não tem como ser feito, porque não tem alimento para todos", 110, 300, 265)
  }
  if (mouseX > 102 && mouseX < 102 + 300 && mouseY > 331 && mouseY < 331 + 26) {
    fill(236, 201, 201);
    rect(101, 331, 300, 26, 5);
    fill(0);
    text("o - errado situação assim não existe", 110, 340, 265)
  }

  if (mouseX > 102 && mouseX < 102 + 300 && mouseY > 372 && mouseY < 372 + 26) {
    fill(236, 201, 201);
    rect(101, 372, 300, 26, 5);
    fill(0);
    text("p - certo até o ano de 2030, precisamos nos unir desde já para acabar com isso!", 110, 380, 265)
  }

}

function telaP5() {
  background(imagempergunta5);
  textSize(10);
  textStyle(BOLD);
  fill(199, 33, 47);
  text("Quem são os responsáveis para acabar com essa situação?", 110, 80, 265)

  textSize(9);
  textStyle(NORMAL);
  fill(141, 141, 141);
  text("q - errado o governo", 110, 260, 265)
  text("r - certo cada indivídeo é responsável para o enfrentamento", 110, 300, 265)
  text("s - errado o governo e empresas", 110, 340, 265)
  text("t - errado lideres mundias, mas sem a população", 110, 380, 265)

  
  if (keyIsDown(81)) { //q
    vidas--
    tela = 10
  }

  else if (keyIsDown(82)) { //r
    tela = 10
    qtdQuestoes++
  }

  else if (keyIsDown(83)) { //s
    vidas--
    tela = 10
  }

  else if (keyIsDown(84)) { //t
    vidas--
    tela = 10
  }
  
  //só para aparecer quando passar o mouse por cima
  if (mouseX > 102 && mouseX < 102 + 300 && mouseY > 249 && mouseY < 249 + 26) {
    fill(236, 201, 201);
    rect(101, 249, 300, 26, 5);
    fill(0);
    text("q - errado o governo", 110, 260, 265)
  }

  if (mouseX > 102 && mouseX < 102 + 300 && mouseY > 290 && mouseY < 290 + 26) {
    fill(236, 201, 201);
    rect(101, 290, 300, 26, 5);
    fill(0);
    text("r - certo cada indivídeo é responsável para o enfrentamento", 110, 300, 265)
  }
  if (mouseX > 102 && mouseX < 102 + 300 && mouseY > 331 && mouseY < 331 + 26) {
    fill(236, 201, 201);
    rect(101, 331, 300, 26, 5);
    fill(0);
    text("s - errado o governo e empresas", 110, 340, 265)
  }

  if (mouseX > 102 && mouseX < 102 + 300 && mouseY > 372 && mouseY < 372 + 26) {
    fill(236, 201, 201);
    rect(101, 372, 300, 26, 5);
    fill(0);
    text("t - errado lideres mundias, mas sem a população", 110, 380, 265)
  }

}

function telaP6() {
  background(imagempergunta6);
  textSize(10);
  textStyle(BOLD);
  fill(199, 33, 47);
  text("Atualmente", 110, 80, 265)

  textSize(9);
  textStyle(NORMAL);
  fill(141, 141, 141);
  text("u - certo todos deveriam ter acesso a coisas básicas, mas infelizmente ainda não chegamos lá", 110, 260, 265)
  text("v - errado em países em desenvolvimento não existe fome", 110, 300, 265)
  text("w - errado atualmente grande parte da população tem acessso a moradia", 110, 340, 265)
  text("x - errado crianças hoje não morrem pela falta de alimento", 110, 380, 265)

  
  if (keyIsDown(85)) { //u
    qtdQuestoes++
    tela = 11
  }

  else if (keyIsDown(86)) { //v
    tela = 11
    vidas--
  }

  else if (keyIsDown(87)) { //w
    vidas--
    tela = 11
  }

  else if (keyIsDown(88)) { //x
    vidas--
    tela = 11
  }
  
  //só para aparecer quando passar o mouse por cima
  if (mouseX > 102 && mouseX < 102 + 300 && mouseY > 249 && mouseY < 249 + 26) {
    fill(236, 201, 201);
    rect(101, 249, 300, 26, 5);
    fill(0);
    text("u - certo todos deveriam ter acesso a coisas básicas, mas infelizmente ainda não chegamos lá", 110, 260, 265)
  }

  if (mouseX > 102 && mouseX < 102 + 300 && mouseY > 290 && mouseY < 290 + 26) {
    fill(236, 201, 201);
    rect(101, 290, 300, 26, 5);
    fill(0);
    text("v - errado em países em desenvolvimento não existe fome", 110, 300, 265)
  }
  if (mouseX > 102 && mouseX < 102 + 300 && mouseY > 331 && mouseY < 331 + 26) {
    fill(236, 201, 201);
    rect(101, 331, 300, 26, 5);
    fill(0);
    text("w - errado atualmente grande parte da população tem acessso a moradia", 110, 340, 265)
  }

  if (mouseX > 102 && mouseX < 102 + 300 && mouseY > 372 && mouseY < 372 + 26) {
    fill(236, 201, 201);
    rect(101, 372, 300, 26, 5);
    fill(0);
    text("x - errado crianças hoje não morrem pela falta de alimento", 110, 380, 265)
  }

}

function telaP7() {
  background(imagempergunta7);
  textSize(10);
  textStyle(BOLD);
  fill(199, 33, 47);
  text("O que significa ODS", 110, 80, 265)

  textSize(9);
  textStyle(NORMAL);
  fill(141, 141, 141);
  text("1 - errado Obseervação de Desenvolvimento Sustentável ", 110, 260, 265)
  text("2 - errado Obstáculo de Desenvolvimento Sustentável", 110, 300, 265)
  text("3 - errado Objetivos de Desenvolvimento Sanitário", 110, 340, 265)
  text("4 - certo Objetivos de Desenvolvimento Sanitário", 110, 380, 265)

  
  if (keyIsDown(49)) { //1
    vidas--
    tela = 12
  }

  else if (keyIsDown(50)) { //2
    tela = 12
    vidas--
  }

  else if (keyIsDown(51)) { //3
    vidas--
    tela = 12
  }

  else if (keyIsDown(52)) { //4
    qtdQuestoes++
    tela = 12
  }
  
  //só para aparecer quando passar o mouse por cima
  if (mouseX > 102 && mouseX < 102 + 300 && mouseY > 249 && mouseY < 249 + 26) {
    fill(236, 201, 201);
    rect(101, 249, 300, 26, 5);
    fill(0);
    text("1 - errado Obseervação de Desenvolvimento Sustentável ", 110, 260, 265)
  }

  if (mouseX > 102 && mouseX < 102 + 300 && mouseY > 290 && mouseY < 290 + 26) {
    fill(236, 201, 201);
    rect(101, 290, 300, 26, 5);
    fill(0);
    text("2 - errado Obstáculo de Desenvolvimento Sustentável", 110, 300, 265)
  }
  if (mouseX > 102 && mouseX < 102 + 300 && mouseY > 331 && mouseY < 331 + 26) {
    fill(236, 201, 201);
    rect(101, 331, 300, 26, 5);
    fill(0);
    text("3 - errado Objetivos de Desenvolvimento Sanitário", 110, 340, 265)
  }

  if (mouseX > 102 && mouseX < 102 + 300 && mouseY > 372 && mouseY < 372 + 26) {
    fill(236, 201, 201);
    rect(101, 372, 300, 26, 5);
    fill(0);
    text("4 - certo Objetivos de Desenvolvimento Sanitário", 110, 380, 265)
  }

}

function telaP8() {
  background(imagempergunta8);
  textSize(10);
  textStyle(BOLD);
  fill(199, 33, 47);
  text("Qual o lema?", 110, 80, 265)

  textSize(9);
  textStyle(NORMAL);
  fill(141, 141, 141);
  text("5 - errado deixar só alguns para trás ", 110, 260, 265)
  text("6 - errado deixar para trás", 110, 300, 265)
  text("7 - errado devemos acabar só com a fome", 110, 340, 265)
  text("8 - certo não deixar ninguém para trás", 110, 380, 265)

  
  if (keyIsDown(53)) { //5
    vidas--
    tela = 13
  }

  else if (keyIsDown(54)) { //6
    tela = 13
    vidas--
  }

  else if (keyIsDown(55)) { //7
    vidas--
    tela = 13
  }

  else if (keyIsDown(56)) { //8
    qtdQuestoes++
    tela = 13
  }
  
  //só para aparecer quando passar o mouse por cima
  if (mouseX > 102 && mouseX < 102 + 300 && mouseY > 249 && mouseY < 249 + 26) {
    fill(236, 201, 201);
    rect(101, 249, 300, 26, 5);
    fill(0);
    text("5 - errado deixar só alguns para trás ", 110, 260, 265)
  }

  if (mouseX > 102 && mouseX < 102 + 300 && mouseY > 290 && mouseY < 290 + 26) {
    fill(236, 201, 201);
    rect(101, 290, 300, 26, 5);
    fill(0);
    text("6 - errado deixar para trás", 110, 300, 265)
  }
  if (mouseX > 102 && mouseX < 102 + 300 && mouseY > 331 && mouseY < 331 + 26) {
    fill(236, 201, 201);
    rect(101, 331, 300, 26, 5);
    fill(0);
    text("7 - errado devemos acabar só com a fome", 110, 340, 265)
  }

  if (mouseX > 102 && mouseX < 102 + 300 && mouseY > 372 && mouseY < 372 + 26) {
    fill(236, 201, 201);
    rect(101, 372, 300, 26, 5);
    fill(0);
    text("8 - certo não deixar ninguém para trás", 110, 380, 265)
  }

  //voltar
  if (mouseX > 20 && mouseX < 50 && mouseY > 10 && mouseY < 50) {
    if (mouseIsPressed)
      tela = 4
  }
}


function telaTenteNovamente() {
  background(imagemTenteNovamente);
  textStyle(BOLD);
  textSize(10);
  fill(199, 33, 47);
  text("Essa é não é a resposta correta", 173, 265, 265)

  fill("#FFFFFF");
  noStroke()
  rect(171, 287, 158, 28, 5);
  textSize(12);
  textStyle(BOLD);
  fill(73, 4, 66,);
  text("Tente Novamente", 200, 295, 265)
  textSize(10);
  textStyle(NORMAL);
  text('ACERTOS: ' +qtdQuestoes, 210, 340);

  if (keyIsDown(32)) { //voltar para a tela da questão 1 utilizando a barra de espaço
    tela = 5
    vidas = 3
    qtdQuestoes = 0
  }

  // if (mouseX > 171 && mouseX < 171 + 158 && mouseY > 287 && mouseY < 285 + 29) {
  //   fill("#FFFFFF");
  //   noStroke()
  //   rect(171, 287, 158, 28, 5);
  //   textSize(12);
  //   textStyle(BOLD);
  //   fill(73, 4, 66,);
  //   text("Tente Novamente", 200, 295, 265)
  //   if (mouseIsPressed) {
  //     tela = 5
  //   }
  // }
}

function Jogo() {
  text('Vidas: '+vidas, 430, 19);

  if (vidas==0) {
    tela = 20
  }
}


function telaBomTrabalho() {
  background(imagemdaultimafase);
  text('ACERTOS: ' +qtdQuestoes, 100, 19);

  if (keyIsDown(48)) {
    tela = 0
    vidas = 3
    qtdQuestoes = 0
  } //0
}

function preload() {
  imageminicio = loadImage("imagemdoinicio.png")
  imagemfases = loadImage("imagemdasfases.png")
  imagemintrodução = loadImage("imagemdovideointrodução.png")
  larisjogo = loadImage("larisjogo.png")
  anajogo = loadImage("ana.png")
  isabelejogo = loadImage("isabelejogo.png")
  seta = loadImage("setaaa.png")
  imagemdecréditos = loadImage("imagemdecréditos.png")
  imagempergunta1 = loadImage("imagemPergunta1.png")
  imagempergunta2 = loadImage("imagemPergunta2.png")
  imagempergunta3 = loadImage("imagemPergunta3.png")
  imagempergunta4 = loadImage("imagemPergunta4.png")
  imagempergunta5 = loadImage("imagemPergunta5.png")
  imagempergunta6 = loadImage("imagemPergunta6.png")
  imagempergunta7 = loadImage("imagemPergunta7.png")
  imagempergunta8 = loadImage("imagemPergunta8.png")
  imagemTenteNovamente = loadImage("ImagemTenteNovamente.png")
  imagemdaultimafase = loadImage("imagemdaultimafase.png")
  imagemdavídeo2 = loadImage("imagemvídeo2.png")
  imageminstruções = loadImage("imageminstruções.png")
}

function setup() {
  createCanvas(500, 450);
}


function draw() {

  if (tela == 0) {
    telaMenu()
    video.style.display = 'none';
    if (mouseX > xMinBotao && mouseX < xMaxBotao) {
      fill(250)
    }
  }
  if (tela == 1) {
    telaInstrucoes()
    video.style.display = 'none';
  }
  if (tela == 2) {
    telaCreditos()
  }
  if (tela == 3) {
    telaPlay()
    video.style.display = 'flex';

  }
  if (tela == 4) {
    telaFases()
    video.style.display = 'none';
  }
  if (tela == 5) {
    telaP1()
    Jogo()
    video.style.display = 'none';
  }
  if (tela == 6) {
    telaP2()
    Jogo()
    video.style.display = 'none';
  }
  if (tela == 7) {
    telaP3()
    Jogo()
    video.style.display = 'none';
  }
  if (tela == 8) {
    telaP4()
    Jogo()
    video.style.display = 'none';
  }
  if (tela == 9) {
    telaP5()
    Jogo()
    video.style.display = 'none';
  }
  if (tela == 10) {
    telaP6()
    Jogo()
    video.style.display = 'none';
  }
  if (tela == 11) {
    telaP7()
    Jogo()
    video.style.display = 'none';
  }
  if (tela == 12) {
    telaP8()
    Jogo()
    video.style.display = 'none';
  }
  if (tela == 13) {
    telaBomTrabalho()
    video.style.display = 'none';
  }

  //telas tente novamente para as questões, caso vidas = 0
  if (tela == 20) {
    telaTenteNovamente()
    video.style.display = 'none';
  }
}