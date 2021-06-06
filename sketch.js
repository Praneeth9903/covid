const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var covid1,covid2,covid3,covid4,covid5,covid6,covid7,covid8,covid9,covid10;
var HERO;
var position;
var wood1;
var fm;
var hc;
var help;
function preload() {
  bg = loadImage("gamingbackground2.png");
wood=loadImage("wood2.png");
fmi=loadImage("fm.png");
hci=loadImage("hc.png");
helpImg=loadImage("help.png");
}



function setup() {
  createCanvas(windowWidth, windowHeight);
 
engine = Engine.create();
world = engine.world;
covid1 = new Covid2(900,150,150,150);
covid2 = new Covid2(1000,270,100,100);
covid3 = new Covid2(1030,120,160,100);
covid4 = new Covid2(1046,210,100,100);
covid5= new Covid2(950,200,60,20);



covid6 = new COVID(1156,200,100,100);
covid7 = new COVID(1165,100,60,100);
covid8= new COVID(1276,100,100,100);
covid9= new COVID(1500,150,100,100);
covid10= new COVID(1300,200,140,20);


HERO=new S(50,550,100,30);
ground=new Ground(600,700,1500,20);

 fm=createSprite(1170,200,29,20)
fm.addImage(fmi);
fm.scale=0.5;


help=createSprite(980,520,20,20);
help.addImage(helpImg);
help.scale=0.3;


hc=createSprite(1030,600,20,20);
hc.addImage(hci);
hc.scale=1;




  

}

function draw() {
  background(bg);
  Engine.update(engine);

  text(mouseX+","+mouseY,200,50);
  textSize(16);
  fill("black");
  text("🆂🅰🆅🅴 🆃🅷🅴 🅵🅰🅼🅸🅻🆈 🅱🆈 🅺🅸🅻🅻🅸🅽🅶 🆃🅷🅴 🆅🅸🆁🆄🆂☆☆╮",2,15,5,);
  ground.display();
covid1.display();
covid2.display();

covid3.display();
covid4.display();
covid5.display();

covid6.display();
covid7.display();

covid8.display();
covid9.display();
covid10.display();
HERO.display();


if(keyDown("A")){
  changePosition(-3,0);
}
if(keyDown("D")){
  changePosition(+3,0);
}

  
  



  wood1=createSprite(180,480);
  wood1.addImage(wood);
  wood1.scale=0.6;

  
  wood1=createSprite(380,400);
  wood1.addImage(wood);
  wood1.scale=0.6;

    
  wood1=createSprite(580,340);
  wood1.addImage(wood);
  wood1.scale=0.6;

    
  wood1=createSprite(740,260);
  wood1.addImage(wood);
  wood1.scale=0.6;

drawSprites();
}
function keyPressed(){  
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(HERO.body,HERO.body.position,{x:20,y:-60});
	}
}
function changePosition(x,y){

    HERO.x=HERO.x+x;
 HERO.y=HERO.y+y;
      
  
}

  
