var xPos = 20;
var yPos = 20;

var x = 380;
var y = 20;

draw = function(){
    background(29, 40, 115);
    
    //stars (points)
    strokeWeight(2);
    stroke(255, 255, 255);
    point(259, 20);
    point(354, 25);
    point(37, 54);
    point(73, 25);
    point(161, 53);
    point(240, 68);
    point(211, 57);
    point(222, 13);
    point(128, 76);
    point(247, 40);
    point(296, 48);
    point(300, 25);
    point(220, 35);
    point(129, 50);
    point(169, 102);
    point(238, 91);
    point(25, 20);
    point(40, 25);
    point(94, 54);
    point(40, 25);
    point(138, 28);
    point(187, 68);
    point(76, 57);
    point(222, 13);
    point(87, 76);
    point(327, 40);
    point(365, 48);
    point(111, 25);
    point(268, 62);
    point(187, 25);
    point(201, 102);
    point(150, 91);
    
    noStroke();
    //buildings
    fill(117, 24, 163);
    rect(150, 150, 100, 250);
    rect(275, 75, 100, 275);
    rect(25, 100, 100, 250);
    
    //windows buildings#1
    fill(222, 215, 222);
    rect(35, 175, 25, 25);
    rect(90, 175, 25, 25);
    rect(35, 125, 25, 25);
    rect(90, 125, 25, 25);
    rect(35, 225, 25, 25);
    rect(90, 225, 25, 25);
    rect(35, 275, 25, 25);
    rect(90, 275, 25, 25);
    
    //windows buildings#2
    fill(222, 215, 222);
    rect(160, 185, 25, 25);
    rect(160, 235, 25, 25);
    rect(160, 285, 25, 25);
    rect(215, 185, 25, 25);
    rect(215, 235, 25, 25);
    rect(215, 285, 25, 25);
    
    //windows buildings#3
    fill(222, 215, 222);
    rect(285, 195, 25, 25);
    rect(340, 195, 25, 25);
    rect(285, 145, 25, 25);
    rect(340, 145, 25, 25);
    rect(285, 245, 25, 25);
    rect(340, 245, 25, 25);
    rect(285, 295, 25, 25);
    rect(340, 295, 25, 25);
    rect(285, 95, 25, 25);
    rect(340, 95, 25, 25);
    
    //star#1
    fill(255, 242, 0);
    ellipse(xPos, yPos, 10, 10);
    
    //star#2
    fill(255, 242, 0);
    ellipse(x, y, 10, 10);
    
    //ground
    fill(55, 214, 79);
    rect(-10, 350, 450, 50);
    
    if (xPos < 390) {
        xPos += 1;
    }
    
    if (yPos < 390) {
        yPos += 1;
    }
    
    if (x < 390) {
        x -= 1;
    }
    
    if (y > 1) {
        y += 1;
    } 
    
};



