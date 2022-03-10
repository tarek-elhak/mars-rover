import {marsObstacles} from "./init.js";

export function checkObstacle(xCoordinate,yCoordinate)
{
    for (let obstacle of marsObstacles){
        if (obstacle[0] === xCoordinate && obstacle[1] === yCoordinate) {
            return true;
        }
    }
    return false;
}