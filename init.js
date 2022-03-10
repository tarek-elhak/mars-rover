export let currentPosition = [];
export let currentDirection = '' ;
export let marsObstacles = [];
export let desiredDestination = [];

export function initializeRover(xCoordinate = 0, yCoordinate = 0,
                                direction = 'N', obstacles = [],destination= [0,0])
{
    // validate the given Coordinates
    if (!Number.isInteger(xCoordinate) || !Number.isInteger(yCoordinate)){
        throw new Error("Invalid Coordinates, Coordinates should be numbers");
    }
    // validate the given heading
    if (direction !== 'N' && direction !== 'E' && direction !== 'S' && direction !== 'W'){
        throw new Error("the Direction should be one of these value " +
            "'N: for North', 'E: for East', 'S: for South', 'W: for West'");
    }
    // validate the given obstacles
    if (Array.isArray(obstacles)){
        for (let obstacle of obstacles){
            if (Array.isArray(obstacle) && obstacle.length === 2){
                for (let coordinate of obstacle){
                    if (!Number.isInteger(coordinate)){
                        throw new Error("a coordinate should be number")
                    }
                }
            }else{
                throw new Error("an obstacle should be array of two coordinates")
            }
        }
    }else{
        throw new Error("Obstacles must be Array");
    }
    // validate the destination

    if (!
        (
            Array.isArray(destination) && destination.length === 2
            && Number.isInteger(destination[0]) && Number.isInteger(destination[1])
        )
    )
    {
        throw new Error("destination must be an array of two numerical coordinates ")
    }

    // initialise the currentPosition
    currentPosition[0] = xCoordinate;
    currentPosition[1] = yCoordinate;
    // initialize the current Heading
    currentDirection = direction;
    // initialize obstacles
    marsObstacles = obstacles;
    // initialize the desired destination
    desiredDestination[0] = destination[0];
    desiredDestination[1] = destination[1];
    return "Rover Has Been Initialized Successfully";
}

// Direction setter
export function setDirection (direction)
{
    currentDirection = direction;
    // for testing purposes
    return undefined;
}
