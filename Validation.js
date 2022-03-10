export function validatePosition(position)
{
    if (!
        (
            Array.isArray(position) && position.length === 2
            && Number.isInteger(position[0]) && Number.isInteger(position[1])
        )
    )
    {
        throw new Error("destination must be an array of two numerical coordinates ")
    }
}

export function validateDestination(destination)
{
    if (!
        (
            Array.isArray(destination) && destination.length === 2
            && Number.isInteger(destination[0]) && Number.isInteger(destination[1])
        )
    )
    {
        throw new Error("destination must be an array of two numerical coordinates ")
    }
}

export function validateDirection(direction)
{
    if (direction !== 'N' && direction !== 'E' && direction !== 'S' && direction !== 'W'){
        throw new Error("the Direction should be one of these value " +
            "'N: for North', 'E: for East', 'S: for South', 'W: for West'");
    }
}

export function validateObstacles(obstacles)
{
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
}