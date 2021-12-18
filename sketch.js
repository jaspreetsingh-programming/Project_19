var bat; var batImg;
var timmy; var timmyImg;
var background; backgroundImg;
var gamestate = "play";





function preload() {
    batImg.loadImage("nein.png");
    timmyImg.loadImage("Timmy.png");
    backgroundImg.loadImg("forest.Img")
}

function setup() {
    createCanvas(600, 600);

    bat = createSprite(400, 320);
    //bat.addImage(batImg);

    
}

function draw() {
    background(200);

    drawSprites();
}