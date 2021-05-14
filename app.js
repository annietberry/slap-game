
var health = 100;
var name = "Voldemort";
var hits = 0;

function slap(){
  health--
  draw()
  hitCount()
}

function punch(){
  health = health - 5
  draw()
  hitCount()
}

function kick(){
  health = health - 10
  draw()
  hitCount()
}

function hitCount(){
  hits++
  draw()
}

 function draw(){
  hideHealth()

  let healthElm = document.getElementById('health')
  healthElm.innerText = health

  let nameElm = document.getElementById('name')
  nameElm.innerText = name

  let hitsElm = document.getElementById('hits')
  hitsElm.innerText = hits
}

draw()

function hideHealth(){
  if(health<=0){
  document.getElementById("game-info").style.display= 'none';
  document.getElementById("dead").style.display= 'flex';
  return
  }
  document.getElementById("dead").style.display= 'none'; 
  
}

//fix so it works on vold death
function playAgain(){
  health=100
  hits=0
  draw()
}





