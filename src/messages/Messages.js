const Messages = {
    "index": {
        robotPositioned: "Error: We have to use first command for robot is PLACE command! \n",
        placeCommand: "PLACE will position the robot on the table in coordinates X,Y in direction to NORTH, SOUTH, EAST or WEST.",
        placeCommandLength: "Error: Parameters format must be X,Y,F \n",
        moveCommand: "MOVE will position toy robot one unit ahead in the direction currently it is.",
        leftCommand: "LEFT will rotate the robot 90 degrees in the specified direction without changing the position of the robot.",
        rightCommand: "RIGHT will rotate the robot 90 degrees in the specified direction without changing the position of the robot.",
        reportCommand: "REPORT will announce the X,Y and F of the robot.",
    },
    "robot": {
        invalidParam: "Invalid direction param type!",
        invalidParamValue: "Invalid direction param value: ",
        outOfSurfaceBoundary: " is out of surface boundary!",
    },
    "utils": {
        invalidDegree: "Invalid degree: ",
        invalidDirection: "Invalid direction: "
    }
};

export default Messages;