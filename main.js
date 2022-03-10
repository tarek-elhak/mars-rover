import {initializeRover} from "./init.js";
import {translateCommands} from "./translateCommands.js";
import {computeCommand} from "./computeCommand.js";
import {currentPosition} from "./init.js";
import {currentDirection} from "./init.js";
import {desiredDestination} from "./init.js";


/* set initial values to start with */
let xCoordinate = 2;
let yCoordinate = -3;
let direction = "S";
let obstacles = [[5,-4]];
let destination = [-2,1];
let commands = "FLFFFRFLB";


try{
    // initialize the rover
    console.log(initializeRover(xCoordinate,yCoordinate,direction,obstacles,destination));
    // translate commands to be understood by the rover
    console.log(translateCommands(commands));
    // compute a command string to get to the desired destination
    console.log(computeCommand(currentPosition,currentDirection,desiredDestination));
}catch (error){
    console.log(error.message);
}


/***
 * NOTE Running computeCommand after running translateCommands will update the initial direction and position
 * so consider the output of the translateCommands for calculating the computeCommand
*/


