// Have robot type 'I am a fellow Human and not a robot"
const robot = require('robotjs');

robot.typeString("I AM A FELLOW HUMAN AND NOT A ROBOT");


// Have robot move mouse across screen in horizontal line

var screenSize = robot.getScreenSize();
var height = screenSize.height / 2 ;
var width = screenSize.width;

for (var x = 0; x < width; x++) {

    y = height;
    robot.moveMouse(x,y);

};

