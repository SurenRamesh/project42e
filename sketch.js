var outerspacebackground
var playbuttonimg,playerplaneimg,enemyplanesimg,meteorsimg

var gameState = "start"



function preload(){
  outerspacebackground = loadImage("Images/outerspaceeeeee.jpg")
  playbuttonimg = loadImage("Images/Omgomgomgomg.png")
  playerplanesimg = loadImage("Images/planesssss-removebg-preview.png")
  enemyplanesimg = loadImage("Images/planes2-removebg-preview.png")
  meteorsimg = loadImage("Images/meteors-removebg-preview.png")
}


function setup(){
  createCanvas(windowWidth, windowHeight)

  playerplanes = createSprite(100,windowHeight/2,30,30)
  playerplanes.addImage(playerplanesimg)
  playerplanes.visible = false

  playbutton = createSprite(windowWidth/2,windowHeight/2,20,20)
  playbutton.addImage(playbuttonimg)
  playbutton.visible=false

  enemyplanes = createSprite(1000,windowHeight/2,30,30)
  enemyplanes.addImage(enemyplanesimg)
  enemyplanes.visible = false
}


function draw(){
  background("black")
  

  drawSprites()


  if(gameState === "start"){
    //background(outerspacebackground)
    playbutton.visible=true
    if(mousePressedOver(playbutton)){
      gameState = "Level 1"
      
      
      

    }
  


  }
  if(gameState === "Level 1"){
    background(0)
    playerplanes.visible = true
    playbutton.visible = false
    enemyplanes.visible = true
    
  }
}