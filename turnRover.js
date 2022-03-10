import {setDirection} from "./init.js";

export function turnRover(command , direction)
{
    setDirection(TURN_RULES[`${direction}|${command}`]);
}


const TURN_RULES =
{
    // East with Right and Left commands
    "E|R" : "S",
    "E|L" : "N",
    // West with Right and Left Commands
    "W|R" : "N",
    "W|L" : "S",
    // North with Right and Left Commands
    "N|R" : "E",
    "N|L" : "W",
    // South with Right and Left Commands
    "S|R" : "W",
    "S|L" : "E"
}