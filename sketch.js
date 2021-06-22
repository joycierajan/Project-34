//Create variables here
var dog, happyDog, database, foodS,foodStock;

function preload()
{
	//load images here
  dog = loadImage("Dog.png");
  happyDog = loadImage("happydog.png");
}

function setup() {
	createCanvas(500, 500);

  database = firebase.database();
  console.log(database);

  foodStock=database.ref('Food');
  foodStock.on("Value", readStock);

  dog = createSprite(200,200,10,10);
  dog.addImage(Dog);
  dog.scale = 0.2
  
}


function draw() { 
  background(46,139,87);

  if(keyDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  drawSprites();
  //add styles here
  fill(255,255,254);
  textSize(15);
  Stroke
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20)

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  } else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}
