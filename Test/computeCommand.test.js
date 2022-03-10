/*
** testing that the rover can find the shortest path to get to a goal
* OR
** rover can compute the shortest string of commands possible to get to a goal
*/

import {computeCommand} from "../computeCommand.js";
let position = [2,3];
let direction = "N";
let destination = [2,3]

test("rover reports that he get to the goal without any moving if it's initialized position is actually " +
    "the desired destination for it", ()=>{

    expect(computeCommand(position,direction,destination))
        .toBe("Rover Reached the destination without Moving !")
});

/*
testing all possible movements from current north direction
*/

test("if the rover heading is north and the destination below its current position and on its left side " +
    "rover moves backward and then turns left and moves forward until get to the destination", ()=>{
    destination = [-2,-3];
    expect(computeCommand(position,direction,destination)).toBe("The Command is BBBBBBLFFFF");
});

test("if the rover heading is north and the destination below its current position and on its right side " +
    "rover moves backward and then turns right and moves forward until get to the destination", ()=>{
    destination = [4,-1];
    expect(computeCommand(position,direction,destination)).toBe("The Command is BBBBRFF");
});

test("if the rover heading is north and the destination juts below its current position " +
    "rover moves backward until get to the destination", ()=>{
    destination = [2,0];
    expect(computeCommand(position,direction,destination)).toBe("The Command is BBB");
});

test("if the rover heading is north and the destination above its current position and on its left side " +
    "rover moves forward and then turns left and moves forward until get to the destination", ()=>{
    destination = [1,4];
    expect(computeCommand(position,direction,destination)).toBe("The Command is FLF");
});

test("if the rover heading is north and the destination above its current position and on its right side " +
    "rover moves forward and then turns right and moves forward until get to the destination", ()=>{
    destination = [3,4];
    expect(computeCommand(position,direction,destination)).toBe("The Command is FRF");
});

test("if the rover heading is north and the destination juts above its current position " +
    "rover moves forward until get to the destination", ()=>{
    destination = [2,6];
    expect(computeCommand(position,direction,destination)).toBe("The Command is FFF");
});

/*
testing all possible movements from current south direction
*/

test("if the rover heading is south and the destination below its current position and on its left side " +
    "rover moves forward and then turns right and moves forward until get to the destination", ()=>{
    direction = "S";
    destination = [1,2];
    expect(computeCommand(position,direction,destination)).toBe("The Command is FRF");
});

test("if the rover heading is south and the destination below its current position and on its right side " +
    "rover moves forward and then turns left and moves forward until get to the destination", ()=>{
    direction = "S";
    destination = [3,2];
    expect(computeCommand(position,direction,destination)).toBe("The Command is FLF");
});

test("if the rover heading is south and the destination juts below its current position " +
    "rover moves forward until get to the destination", ()=>{
    direction = "S";
    destination = [2,0];
    expect(computeCommand(position,direction,destination)).toBe("The Command is FFF");
});

test("if the rover heading is south and the destination above its current position and on its left side " +
    "rover moves backward and then turns right and moves forward until get to the destination", ()=>{
    direction = "S";
    destination = [1,4];
    expect(computeCommand(position,direction,destination)).toBe("The Command is BRF");
});

test("if the rover heading is south and the destination above its current position and on its right side " +
    "rover moves backward and then turns left and moves forward until get to the destination", ()=>{
    direction = "S";
    destination = [3,4];
    expect(computeCommand(position,direction,destination)).toBe("The Command is BLF");
});

test("if the rover heading is south and the destination juts above its current position " +
    "rover moves backward until get to the destination", ()=>{
    direction = "S"
    destination = [2,6];
    expect(computeCommand(position,direction,destination)).toBe("The Command is BBB");
});

/*
testing all possible movements from current east direction
*/


test("if the rover heading is east and the destination below its current position and on its left side " +
    "rover moves backward and then turns left and moves forward until get to the destination", ()=>{
    direction = "E"
    destination = [1,4];
    expect(computeCommand(position,direction,destination)).toBe("The Command is BLF");
});

test("if the rover heading is east and the destination below its current position and on its right side " +
    "rover moves backward and then turns left and moves forward until get to the destination", ()=>{
    direction = "E"
    destination = [1,2];
    expect(computeCommand(position,direction,destination)).toBe("The Command is BRF");
});

test("if the rover heading is east and the destination juts below its current position " +
    "rover moves backward until get to the destination", ()=>{
    direction = "E";
    destination = [1,3];
    expect(computeCommand(position,direction,destination)).toBe("The Command is B");
});

test("if the rover heading is east and the destination above its current position and on its left side " +
    "rover moves forward and then turns left and moves forward until get to the destination", ()=>{
    direction = "E";
    destination = [3,4];
    expect(computeCommand(position,direction,destination)).toBe("The Command is FLF");
});

test("if the rover heading is east and the destination above its current position and on its right side " +
    "rover moves forward and then turns right and moves forward until get to the destination", ()=>{
    direction = "E";
    destination = [3,2];
    expect(computeCommand(position,direction,destination)).toBe("The Command is FRF");
});

test("if the rover heading is north and the destination juts above its current position " +
    "rover moves forward until get to the destination", ()=>{
    destination = [3,3];
    expect(computeCommand(position,direction,destination)).toBe("The Command is F");
});


/*
testing all possible movements from current west direction
*/


test("if the rover heading is west and the destination below its current position and on its left side " +
    "rover moves backward and then turns left and moves forward until get to the destination", ()=>{
    direction = "W"
    destination = [3,2];
    expect(computeCommand(position,direction,destination)).toBe("The Command is BLF");
});

test("if the rover heading is west and the destination below its current position and on its right side " +
    "rover moves backward and then turns right and moves forward until get to the destination", ()=>{
    direction = "W"
    destination = [3,4];
    expect(computeCommand(position,direction,destination)).toBe("The Command is BRF");
});

test("if the rover heading is west and the destination juts below its current position " +
    "rover moves backward until get to the destination", ()=>{
    direction = "W";
    destination = [3,3];
    expect(computeCommand(position,direction,destination)).toBe("The Command is B");
});

test("if the rover heading is west and the destination above its current position and on its left side " +
    "rover moves forward and then turns left and moves forward until get to the destination", ()=>{
    direction = "W";
    destination = [1,2];
    expect(computeCommand(position,direction,destination)).toBe("The Command is FLF");
});

test("if the rover heading is west and the destination above its current position and on its right side " +
    "rover moves forward and then turns right and moves forward until get to the destination", ()=>{
    direction = "W";
    destination = [1,4];
    expect(computeCommand(position,direction,destination)).toBe("The Command is FRF");
});

test("if the rover heading is west and the destination juts above its current position " +
    "rover moves forward until get to the destination", ()=>{
    direction = "W";
    destination = [1,3];
    expect(computeCommand(position,direction,destination)).toBe("The Command is F");
});
