import {currentPosition} from "./init.js";
import {currentDirection} from "./init.js";
import {moveRover} from "./moveRover.js";
import {turnRover} from "./turnRover.js";
import {roverReport} from "./roverReport.js";

export function translateCommands(commands)
{
    // validate the given string of commands
    for (let command of commands){
        if (command !== 'F' && command !== 'B' && command!== 'R' && command !== 'L'){
            throw new Error("command string must contain only these chars, 'F: for forward'," +
                "'B: for backward','R: for right','L: for left' ");
        }
    }
    // execute each command
    for (let command of commands){
        // move on F || B
        if (command === 'F' || command === 'B'){
            moveRover(command,currentPosition,currentDirection);
        }
        // Turn on R || L
        else{
            turnRover(command,currentDirection);
        }
    }

    // Rover reports its current position and direction
    return roverReport(currentPosition,currentDirection);
}