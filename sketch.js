var Obs =[]

function setup(){

  frameRate(50)
  createCanvas(windowWidth,windowHeight)

  var ObsNumber=width/10
  for(i=0;i<ObsNumber;i++){ var newObj= new Obj()
    Obs.push(newObj)
  }
}

function draw(){


      background(100)

for(h=1;h<Obs.length;h++){

 for(f=1;f<Obs.length;f++){
  Obs[h].display= polygon( Obs[h].a,Obs[h].b,100,Obs[h].c )
   Obs[h].a=h*100-100
   Obs[h].b=f*10-100,100
   Obs[h].c=(mouseX/100)%15

   if(Obs[h].a+50>mouseX && Obs[h].a-50<mouseX)
   {Obs[h].d= color(255-random(1,250),100,100+random(1,150))}
   else{Obs[h].d= color(255-random(1,50),100+random(1,50),100)}

  fill(Obs[h].d)
}}
}

function Obj() {
  this.a=0
  this.b= 0
  this.ut=0
  this.c=0
  this.d= color(255-random(1,50),100+random(1,50),100)
  this.display= 0
}


function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
