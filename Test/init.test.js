/*
** testing the initialization process for the rover
*/
import {initializeRover,setDirection} from "../init";



test("passing valid arguments initializes the rover successfully",()=>{
    expect(initializeRover(-1,3,'W',[[1,2],[0,4]],[6,1]))
        .toBe("Rover Has Been Initialized Successfully");
});

it("should throw an error when passing non integer coordinates",()=>{
    expect(()=>initializeRover(0.5,"2"))
        .toThrow(Error);
});

it('should throw an error when invalid direction letter', () => {
    expect(()=>initializeRover(0,0,'Q'))
        .toThrow(Error);
});

it('should throws an error when passing non array as obstacles ',  () => {
    expect(()=>initializeRover(0,0,'N',"test"))
        .toThrow(Error);
});

it('should throws an error when passing array of singular values as obstacles', () => {
    expect(()=>initializeRover(0,0,'N',[1,2]))
        .toThrow(Error);
});

it('should throws an error when passing array of non integer arrays as obstacles', () => {
    expect(()=>initializeRover(0,0,'N',[["10","D"]]))
        .toThrow(Error);
});

it('should throws an error when passing array of more than two items arrays as obstacles', () => {
    expect(()=>initializeRover(0,0,'N',[[1,2,3],[1,2]]))
        .toThrow(Error);
});

it('should ', function () {
    expect(setDirection()).toBe(undefined);
});