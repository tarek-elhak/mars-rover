import {initializeRover} from "./init.js";
import {translateCommands} from "./translateCommands.js";
import {computeCommand} from "./computeCommand.js";


/* set initial values to start with */
let xCoordinate = undefined;
let yCoordinate = undefined;
let initialDirection = "";
let obstacles = [];
let commands = "";
/* set values to computeCommand */
let startPosition = [];
let destination = [];
let direction = "";

try{
    // initialize the rover
   console.log(initializeRover(xCoordinate,yCoordinate,initialDirection,obstacles));
    // translate commands to be understood by the rover
   console.log(translateCommands(commands));
    // compute a command string to get to the desired destination
    console.log(computeCommand(startPosition,direction,destination));
}catch (error){
    console.log(error.message);
}


