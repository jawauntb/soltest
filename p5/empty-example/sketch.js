let font,
  fontsize = 25;

function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  font = loadFont('../assets/consolas/Consolas.ttf');
}

function setup() {
  var lerpedback = lerpColor(color(purNigthSky), color(bluesteel), random(10)/random(10,80));
  backcolor = lerpColor(lerpedback, color('black'), random(1700)/random(16,4000))
  let cnv = createCanvas(1400, 875, WEBGL);
  // Set text characteristics
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);
  // frameRate(15)
  createLoop({
    duration:2,
    framesPerSecond: random(5),
    gif:{
      fileName:'city' + random(33,800).toString()+'.gif',
      startLoop:0,
      endLoop:1,
      download:true,
    }
  })
  // animLoop.noiseFrequency(10)
  // noLoop()
}
var nightBlue = (0, 24, 72)
var purpleSky = '#5F42C0'

var litBuildingTop= '#88F7D3'
var whiteStar = '#fff4ea'
var orangeLights = '#E89A3D'
var offwhite = '#faf4f0'
var bluesteel = '#5c7287'
var whiteLight = '#F6F7F1'
var darkSteel = '#171c21'
var topRedLight = '#D25282'
var lightYellow = '#ffffe2'
var deepRed = '#FA011F'

var darkBuilding = '#432B36'

var steelBuilding = '#9BAED7'
var purNigthSky = '#0c1445'
var redBrown = '#6B3825'
var techGreen = '#39ff14'
var steels = [offwhite, bluesteel, darkSteel,darkBuilding, steelBuilding,techGreen]

var buildingColors = [steelBuilding, nightBlue, topRedLight]
var lightColors = [litBuildingTop]
var counter = 0
function draw() {
  background(backcolor);
	noFill();
	stroke(255);
  drawSun(random(15,23))
  var lightgrn = lerpColor(color('white'), color(techGreen), random(45)/50);
	for (var i=-0; i < 100; i++) {
    push()
    textSize(random(12,90));
    fill(random(7)< 5? random(7)< 3? lightgrn: techGreen: 'white')
		text(floor(random(2)), random(width*(-2), width*4)+90, random(height/4, height*4)+80);
    noFill()
    pop()
	}
	noStroke();
	fill(0);
	rect(1200, height - 100, width, 100);
  drawSun(random(67,90))

  // makeCity(random(750), random(30));
  // makeCity(80, 47);
  // // makeCity(random(1000), random(-10, 25));
  // makeCity(random(70), -8);
  // makeCity(random(30), random(-100,-10));
  // makeCity(random(16, 46000), random(10,400));
  fill(random(40,255), random(1, 255), random(5,90))
  ellipse(random(-70,70) , -1*random(45,55), random(88,300))
  makeCity(5, -1200)
  makeCity(16, -80);
  makeCity(45, -5);
  makeCity(15, 10);
  makeCity(random(56,800), 40);



}

function makeShimmer(){
  // ambientLight(random(4,233), random(4,220), random(3,253));
  // specularMaterial(random(240, 250));
  shininess(random(0,13));
}

function createCharAtPositionInColor(x,y,value, color){
  // makeShimmer()
  textSize(random(5,60));
  fill(color)
  text(value, x, y)
}

function fillCoordWithDigits(x, y, w, h, colory, increment){
  for (var yc=0; yc<y+random(13,50); yc+=increment) {
    for (var xc=0; xc<w-random(3,22); xc+=w/(increment/2)){
    // for each point within bounds, draw a number between 0 and random range,
    //increment points after
      var colorIdx = floor(random(colory.length))
      var num2sho = floor(random(2))
      createCharAtPositionInColor(xc, yc, num2sho, colory[colorIdx])
    }
  }
}

function makeCity(bN, off) {
  makeShimmer()
	var tmp = off || 0
	var bW = width / random(bN-6);
	for (var i = 0; i < bN; i++) {
    lightsteel = lerpColor(color(offwhite), color(bluesteel), bN/50);
    nightsteel = lerpColor(color(bluesteel), color(darkSteel), bN/50);
    aqua = lerpColor(color(bluesteel), color(techGreen), bN/50);
    var lightgrn = lerpColor(color('white'), color(techGreen), bN/50);
    var allSteels = [lightsteel, nightsteel, aqua, lightgrn]
    var bH = random(10, height + 100)
    let rx = tmp + random(5)
    let ry = height - random(95,100) - bH
    let rw = bW - random(10,11)
    let rh = bH
    fill(nightsteel)
    noStroke()
    // rect(rx, ry, rw, rh)
    fillCoordWithDigits(rx, ry, rw, rh, allSteels, 10)

		for (var k = 0; k < bH - 40; k += 10) {
			for (var j = 0; j < bW - 10; j += (bW-10)/5) {
				addWindowLight(bW, bH, k, j, tmp)
			}
		}
    var c = random(100) < 50?random(40, 70) < 50?steels[floor(random(steels.length))]: topRedLight: litBuildingTop;
    stroke(c)
    strokeWeight(bW*random(5,9)*.03)
    text(floor(random(3)), (bW-random(bW/2)), bH+1)
		tmp += bW;
	}
}

function addWindowLight(bW, bH, k,j, tmp){
  var ctmp = random(0, 255);
  stroke(ctmp, ctmp, 0);
  var pointWidth = tmp+5+j+((bW-10)/5)/10
  var pointHeight = height-100-bH+20+k
  if (pointHeight * random(10)%13 < 3 && pointHeight > bH*.77){
    stroke(redBrown)
  }
  if (pointHeight%random(pointHeight/7) < 3){
    stroke('white')
  }
  if (pointHeight%random(pointHeight/5) < random(25)){
    stroke(bluesteel)
  }
  strokeWeight(bW*0.2);
  text(random(2), pointWidth, pointHeight)
}

function drawSun(val) {
  makeShimmer()
  ellipse(random(-200,3) , -1*random(-10,14), random(9,4))
  var color = random(val)%2 > 0? random(70)%2 > 4? random(72)%3 > 6?'yellow': lightYellow: orangeLights : offwhite
  //sun
  fill(color)
  ellipse(random(-20,300) , -1*random(10,100), random(2,100))
}