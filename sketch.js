var dog, happyDog,dog_img,happydog_img;
var  database;
var foodS, foodStock;

function preload(){

  //load images here
  dog_img = loadImage("images/dog.png");

  happydog_img = loadImage("images/happydog.png");
  
}

function setup() {
	createCanvas(500,500);
   
  dog = createSprite(250,300,30,40);
  dog.addImage(dog_img);
  dog.scale = 0.2;

  database = firebase.database();
  
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87)

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happydog_img);
} else{
  //dog.addImage(dog_anime)
}


  drawSprites();
  //add styles here
  fill("red");
  textSize(20);
text("Food Left :"+ foodS,200,100);
text("Note : Press UP_ARROW to Feed Drago Milk",80,20);

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
if(x<= 0){
  x =0;
}else{
  x = x-1;
}

database.ref('/').update({
  Food: x,
})
}

