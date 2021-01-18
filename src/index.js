import Robot from "./Robot";
import Vorpal from "vorpal";
import {initializeRobotInstance} from "./Initializer.js"
import {Logs} from "./utils/ErrorLogs.js"
import Messages from "./messages/Messages";

const vorpal = new Vorpal().delimiter("robotSimulator$");

/*
 * Checking if toy robot has been positioned/placed on tabletop
 */
const isRobotPositioned = (args) => {
    if (vorpal.activeCommand.parent.robotPositioned) {
        return true;
    } else {
        Logs(Messages.index.robotPositioned, "red");
        return false;
    }
};

/**
 * Reference of Robot object to vorpal activeCommand instance to keep 
 * vorpal instance updated in case of any change in Robot object
 * and assign value to robot position as false initially
 */
const setRobotReferenceAndPosition = () => {
    try {
        let data;
        vorpal.activeCommand.parent.robotSimulator = initializeRobotInstance();
        vorpal.activeCommand.parent.robotPositioned = false;
        data = {
            robotSimulator: vorpal.activeCommand.parent.robotSimulator,
            robotPositioned: vorpal.activeCommand.parent.robotPositioned
        };
    } catch (error) {
        const errorMessage = "Error: " + err.message + "\n";
        Logs(errorMessage, "red");
    }
    
}

/**
 * commanda to start robot
 */
vorpal.command("init",
    "Start Robot Simulator",
    {})
    .action((args, callback) => {
        let data, error;
        callback(error, data);
    })
    .hidden();

/**
 * This PLACE command should have 3 parts like X,Y,F like coordinates and direction of the robot
 * X and Y are coordinates (Input can be 0-5 as integers)
 * F is direction (facing) (Input can be EAST, WEST, NORTH, SOUTH)
 */
vorpal.command(
    "PLACE [X,Y,F] Where [X] and [Y] are rebot position coordinates and [F] is a facing direction",
    Messages.index.placeCommand,
                {})
    .action((args, callback) => {
        let data, error;
        try {
          let parts = args["X,Y,F"].split(",");
          if (parts.length !== 3) {
            /**
             * It is the use of chalk package to provide colorful experience of errors and 
             * here we will provide error message of length with red color text that passed 
             * arguments are not good in length as per expectation
             */
            Logs(Messages.index.placeCommandLength, "red");
          } else {
            /**
             * Desstructure array into x,y,f after doing parts of the command
             */
            let [x, y, f] = parts;
            let updatedX = (isNaN(parseInt(x, 10))) ? 0 : parseInt(x, 10);
            let updatedY = (isNaN(parseInt(y, 10))) ? 0 : parseInt(y, 10);
            let updatedF = f.toUpperCase();
            
            /**
             * It will reset robot object referenced to Vorpal instance if we use multiple 
             * PLACE commands in one row at terminal
             */
            setRobotReferenceAndPosition();
            /**
             * Update reference of Vorpal instance with the updated robot object place 
             * and robotPositioned as true after successfully placing robot.
             */
            data = vorpal.activeCommand.parent.robotSimulator.place(updatedX, updatedY, updatedF);
            vorpal.activeCommand.parent.robotPositioned = true;
          }
        } catch (err) {
          error = err;
            /**
             * Throw any execption in red color font
             */
            const errorMessage = "Error: " + err.message + "\n";
            Logs(errorMessage, "red");
        }
        callback(error, data);
    });

/**
 * This Move command will move robot one unit forward if there is no surface out of boundary error
 */
vorpal.command(
    "MOVE",
    Messages.index.moveCommand,
                {})
    .validate(isRobotPositioned)
    .action((args, callback) => {
        let data, error;
        try {
            data = vorpal.activeCommand.parent.robotSimulator.move();
        } catch (err) {
            error = err;
            const errorMessage = "Error: " + err.message + "\n";
            Logs(errorMessage, "red");
        }
        callback(error, data);
    });
/**
 * This RIGHT command will rotate robot clockwise without changing position
 */
vorpal.command(
    "RIGHT",
    Messages.index.rightCommand,
                {})
    .validate(isRobotPositioned)
    .action((args, callback) => {
        let data, error;
        try {
            data = vorpal.activeCommand.parent.robotSimulator.right();
        } catch (err) {
            error = err;
            const errorMessage = "Error: " + err.message + "\n";
            Logs(errorMessage, "red");
        }
    callback(error, data);
});
/**
 * This LEFT command will rotate robot anti-clockwise without changing position
 */
vorpal.command(
    "LEFT",
    Messages.index.leftCommand,
                {})
    .validate(isRobotPositioned)
    .action((args, callback) => {
        let data, error;
        try {
            data = vorpal.activeCommand.parent.robotSimulator.left();
        } catch (err) {
            error = err;
            const errorMessage = "Error: " + err.message + "\n";
            Logs(errorMessage, "red");
        }
    callback(error, data);
});
/**
 * This REPORT command will furnish results of the robot movement
 */
vorpal.command(
    "REPORT",
    Messages.index.reportCommand,
                {})
    .validate(isRobotPositioned)
    .action((args, callback) => {
        let data, error;
        try {
            data = vorpal.activeCommand.parent.robotSimulator.report();
            Logs(data.X + "," + data.Y + "," + data.F + " \n", "blue");
        } catch (err) {
            error = err;
            const errorMessage = "Error: " + err.message + "\n";
            Logs(errorMessage, "red");
        }
        callback(error, data);
    });

vorpal.show();

process.on("uncaughtException", (error) => {
    const errorMessage = "Error: " + error.message + "\n";
    Logs(errorMessage, "red");
    vorpal.ui.cancel();
});

export { vorpal };