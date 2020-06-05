var raindrops = [];
var raindrops = [];
function setup() {
  createCanvas(1550,705);
}

function draw() {
  background(0);

  if(frameCount % 1 === 0){
    var raindrop = new Drops(random(0,1550), -100, 3, random(20, 50));
    raindrops.push(raindrop);
  }

  for(var i = 0; i < raindrops.length; i++){
    raindrops[i].fall(10);
    raindrops[i].display();
  }
}
