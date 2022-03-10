import {DIRECTIONS} from "./mappingDirection.js";

export function roverReport(position,direction)
{
    return `(${position[0]}, ${position[1]}) ${DIRECTIONS[direction]}`;
}