
import Surface from "./Surface.js";
import Robot from "./Robot.js";

/*
 * Checking if toy robot has been positioned/placed on tabletop
 */
let initializeRobotInstance = () => {
    return new Robot();
};

let initializeSurfaceInstance = (width = 5, height = 5) => {
    return new Surface(width, height);
};

export {initializeRobotInstance, initializeSurfaceInstance}