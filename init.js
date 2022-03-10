import {validatePosition} from "./Validation.js";
import {validateDestination} from "./Validation.js";
import {validateDirection} from "./Validation.js";
import {validateObstacles} from "./Validation.js";
export let currentPosition = [];
export let currentDirection = '' ;
export let marsObstacles = [];
export let desiredDestination = [];

export function initializeRover(xCoordinate = 0, yCoordinate = 0,
                                direction = 'N', obstacles = [])
{
    // validate the given Coordinates
    validatePosition([xCoordinate,yCoordinate]);
    // validate the given heading
   validateDirection(direction);
    // validate the given obstacles
    validateObstacles(obstacles);

    // initialise the currentPosition
    currentPosition[0] = xCoordinate;
    currentPosition[1] = yCoordinate;
    // initialize the current Heading
    currentDirection = direction;
    // initialize obstacles
    marsObstacles = obstacles;

    return "Rover Has Been Initialized Successfully";
}

// Direction setter
export function setDirection (direction)
{
    currentDirection = direction;
    // for testing purposes
    return undefined;
}
