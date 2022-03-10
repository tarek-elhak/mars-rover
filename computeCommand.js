import {validateDestination, validateDirection, validatePosition} from "./Validation.js";


export function computeCommand(startPosition,direction,destination)
{
    let command = "";
    let position = startPosition.slice(0);

    // validate the position
    validatePosition(position);
    // validate the direction
    validateDirection(direction);
    // validate the destination
    validateDestination(destination);

    // check if the initial position is also the desired destination or not
    let reached = checkDestinationReached(position,destination,command);
    if (reached){
        return reached;
    }else{
        if (direction === 'N' || direction === 'S'){
            while (!reached){
                // is there is a need to turn or not
                if (position[1] > destination[1]){
                    // the destination point below the current point
                    // move forward by the difference if the direction is west and backward otherwise
                    let difference = Math.abs(position[1]-destination[1])
                    if (direction === 'S'){
                        for(let i = 0 ; i < difference ; i++){
                            command = command.concat("F");
                            // move the rover
                            position[1] -=1;
                        }
                        reached = checkDestinationReached(position,destination,command);
                    }else{
                        for(let i = 0 ; i < difference ; i++){
                            command = command.concat("B");
                            position[1] -=1;
                        }
                        reached = checkDestinationReached(position,destination,command);
                    }
                }else if (position[1] < destination[1]){
                    // the destination point above the current point
                    // move forward by the difference if the direction is north and backward otherwise
                    let difference = Math.abs(position[1]-destination[1]);
                    if (direction === 'N'){
                        for(let i = 0 ; i < difference ; i++){
                            command = command.concat("F");
                            position[1] += 1;
                        }
                        reached = checkDestinationReached(position,destination,command);
                    }else{
                        for(let i = 0 ; i < difference ; i++){
                            command = command.concat("B");
                            position[1] += 1;
                        }
                        reached = checkDestinationReached(position,destination,command);
                    }
                }else{
                    // rover needs to turn and then move forward|backward until reach the destination point
                    if(destination[0] < position[0]) {
                        if (direction === "N") {
                            // turn left
                            command = command.concat("L");
                        }else {
                            // turn Right
                            command = command.concat("R");
                        }
                        // move forward by the difference
                        let difference = Math.abs(position[0]-destination[0]);
                        for(let i = 0 ; i < difference ; i++){
                            command = command.concat("F");
                            position[0] -= 1;
                        }
                        reached = checkDestinationReached(position,destination,command);
                    }else {
                        if (direction === 'N'){
                            // turn right
                            command = command.concat('R');
                        } else {
                            // turn left
                            command = command.concat('L');
                        }
                        // move forward by the difference
                        let difference = Math.abs(position[0]-destination[0])
                        for(let i = 0 ; i < difference ; i++){
                            command = command.concat("F");
                            position[0] += 1;
                        }
                        reached = checkDestinationReached(position,destination,command);
                    }
                }
            }
        }else{
            // direction is 'E' || direction is 'W'
            while (!reached){
                // is there is a need to turn or not
                if (position[0] > destination[0]){
                    // the destination point at the left of the current point
                    // move forward by the difference if the direction is west and backward otherwise
                    let difference = Math.abs(position[0]-destination[0]);
                    if (direction === 'W'){
                        for(let i = 0 ; i < difference ; i++){
                            command = command.concat("F");
                            // move the rover
                            position[0] -=1;
                        }
                        reached = checkDestinationReached(position,destination,command);
                    }else{
                        for(let i = 0 ; i < difference ; i++){
                            command = command.concat("B");
                            position[0] -=1;
                        }
                        reached = checkDestinationReached(position,destination,command);
                    }
                }else if (position[0] < destination[0]){
                    // the destination point at the right of the current point
                    // move forward by the difference if the direction is east and backward otherwise
                    let difference = Math.abs(position[0]-destination[0]);
                    if (direction === 'E'){
                        for(let i = 0 ; i < difference ; i++){
                            command = command.concat("F");
                            position[0] += 1;
                        }
                        reached = checkDestinationReached(position,destination,command);
                    }else{
                        for(let i = 0 ; i < difference ; i++){
                            command = command.concat("B");
                            position[0] += 1;
                        }
                        reached = checkDestinationReached(position,destination,command);
                    }
                }else{
                    // rover needs to turn and then move forward|backward until reach the destination point
                    if(destination[1] < position[1]) {
                        // it's down me
                        if (direction === "E") {
                            // turn right
                            command = command.concat("R");
                        }else {
                            // turn Right
                            command = command.concat("L");
                        }
                        // move forward by the difference
                        let difference = Math.abs(position[1]-destination[1]);
                        for(let i = 0 ; i < difference ; i++){
                            command = command.concat("F");
                            position[1] -= 1;
                        }
                        reached = checkDestinationReached(position,destination,command);
                    }else {
                        // it's up me
                        if (direction === 'E'){
                            // turn left
                            command = command.concat('L')
                        } else {
                            // turn right
                            command = command.concat('R')
                        }
                        // move forward by the difference
                        let difference = Math.abs(position[1] - destination[1])
                        for(let i = 0 ; i < difference ; i++){
                            command = command.concat("F");
                            position[1] += 1;
                        }
                        reached = checkDestinationReached(position,destination,command);
                    }
                }
            }
        }
    }

    return reached;
}

// helper function to test if the destination reached or not
function checkDestinationReached(position,destination,command)
{
    if (position[0] === destination[0] && position[1] === destination[1]){
        return command === "" ? "Rover Reached the destination without Moving !" :
            `The Command is ${command}`;
    }else{
        return false;
    }
}