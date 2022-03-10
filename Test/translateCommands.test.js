/*
 * testing that the rover executes the sent commands and reports its location | heading with avoiding obstacles
 * by stopping and reporting its current location | heading  
 
*/
import {translateCommands} from "../translateCommands.js";
import {initializeRover} from "../init.js";

it('should throws an error when sending invalid command character', () => {
    expect(()=>translateCommands("FBLZR")).toThrow(Error);
}); 

test('rover moves forward and backward with North Direction ', ()=>{
    initializeRover(4,2,'N');
    expect(translateCommands("F")).toBe("(4, 3) NORTH");
    expect(translateCommands("B")).toBe("(4, 2) NORTH");
});

test('rover moves forward and backward with East Direction ', ()=>{
    initializeRover(-2,2,'E');
    expect(translateCommands("F")).toBe("(-1, 2) EAST");
    expect(translateCommands("B")).toBe("(-2, 2) EAST");
});

test('rover moves forward and backward with South Direction ', ()=>{
    initializeRover(4,-2,'S');
    expect(translateCommands("F")).toBe("(4, -3) SOUTH");
    expect(translateCommands("B")).toBe("(4, -2) SOUTH");
});

test('rover moves forward and backward with West Direction ', ()=>{
    initializeRover(-4,2,'W');
    expect(translateCommands("F")).toBe("(-5, 2) WEST");
    expect(translateCommands("B")).toBe("(-4, 2) WEST");
});

test('rover turns right with all Directions ', ()=>{
    initializeRover(4,2,'N');
    expect(translateCommands("R")).toBe("(4, 2) EAST");
    expect(translateCommands("R")).toBe("(4, 2) SOUTH");
    expect(translateCommands("R")).toBe("(4, 2) WEST");
    expect(translateCommands("R")).toBe("(4, 2) NORTH");
});

test('rover turns left with all Directions ', ()=>{
    initializeRover(4,2,'N');
    expect(translateCommands("L")).toBe("(4, 2) WEST");
    expect(translateCommands("L")).toBe("(4, 2) SOUTH");
    expect(translateCommands("L")).toBe("(4, 2) EAST");
    expect(translateCommands("L")).toBe("(4, 2) NORTH");
});

test('rover reports its current location after executing string of commands', ()=>{
    initializeRover(4,2,'E');
    expect(translateCommands("FLFFFRFLB")).toBe("(6, 4) NORTH");
})

test('rover avoids obstacles and stop with reporting its current location and direction before' +
    'hitting the obstacle', ()=>{
    initializeRover(4,2,'N',[[4,4]]);
    expect(()=>translateCommands("FF")).toThrow("(4, 3) NORTH STOPPED");
})