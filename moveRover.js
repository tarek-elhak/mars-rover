import {currentDirection, currentPosition} from "./init.js";
import {checkObstacle} from "./checkObstacle.js";
import {roverReport} from "./roverReport.js";


export function moveRover(command , position , direction)
{
    // extract coordinates from the passed position
    let [xCoordinate,yCoordinate] = position;

    switch (direction){
        case('E'):
            if (command === 'F') {
                xCoordinate += 1;
                break;
            }else {
                xCoordinate -= 1;
                break;
            }
        case('W'):
            if (command === 'F'){
                xCoordinate-=1;
                break
            }else{
                xCoordinate+=1;
                break;
            }
        case('S'):
            if (command === 'F'){
                yCoordinate-=1;
                break;
            }else
            {
                yCoordinate+=1;
                break;
            }
        default:
            if (command === 'F'){
                yCoordinate+=1;
            }else{
                yCoordinate-=1;
            }
    }
    // check for obstacles
    if (checkObstacle(xCoordinate,yCoordinate)){
        // there is obstacle, so report it
        throw new Error(`${roverReport(currentPosition, currentDirection)} STOPPED`);
    }else{
        // update the current position
        currentPosition[0] = xCoordinate;
        currentPosition[1] = yCoordinate;
    }

}