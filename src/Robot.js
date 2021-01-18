import Messages from "./messages/Messages";
import Surface from "./Surface";
import { isValidDirection, getDirectionByDegree, getDirectionDegree, getDirectionMoment } from "./utils/DirectionUtils";

class Robot {
    
    /**
     * Constructor Initialization
     */
    constructor () {
        this.surface = new Surface();
        this.x = null;
        this.y = null;
        this.direction = null;
    }

    /*
     * Set direction of robot
     */
    setDirection = direction => {
        if (typeof direction !== "string") {
            throw new Error(Messages.robot.invalidParam);
        }
        direction = direction.toUpperCase();
        if (!isValidDirection(direction)) {
            throw new Error(Messages.robot.invalidParamValue + direction);
        }
        this.direction = direction;
    }

    /**
     * Put the toy robot on the table in position X,Y 
     * and direction NORTH, SOUTH, EAST or WEST
     * @param {*} x (coordinate)
     * @param {*} y (coordinate)
     * @param {*} f (facing/direction)
     * @returns Bool
     */
    place = (x, y, f) => {
        if (this.surface.checkSurfaceOutOfBound(x, y)) {
            throw new Error(x + "," + y + Messages.robot.outOfSurfaceBoundary);
        } else {
            this.setDirection(f);
            this.x = x;
            this.y = y;
            return true;
        }
    }

    /*
     * Move the toy robot one unit forward in the direction
     */
    move = () => {
        let [nextCoordinateX, nextCoordinateY] = getDirectionMoment(this.direction);
        let newCoordinateX = this.x + nextCoordinateX;
        let newCoordinateY = this.y + nextCoordinateY;

        if (this.surface.checkSurfaceOutOfBound(newCoordinateX, newCoordinateY)) {
            throw new Error(newCoordinateX + "," + newCoordinateY + Messages.robot.outOfSurfaceBoundary);
        } else {
            this.x = newCoordinateX;
            this.y = newCoordinateY;
            return true;
        }
    }

    /*
     * This function will return boolean and will set degree 
     * based on direction to rotate anti-clockwise and will get direction and set direction
     * anti-clockwise rotation
     */
    left = () => {
        if (!this.direction) 
            return false;

        let degree = getDirectionDegree(this.direction);
        degree -= 90;
        this.direction = getDirectionByDegree(degree);
        return true;
    }

    /*
     * This function will return boolean and will set degree 
     * based on direction to rotate clockwise and will get direction and set direction
     * clock wise rotation
     */
    right = () => {
        if (!this.direction) 
            return false;

        let degree = getDirectionDegree(this.direction);
        degree += 90;
        this.direction = getDirectionByDegree(degree);
        return true;
    }

    /*
     * This function will return coordinates X,Y 
     * and current direction of the robot
     */
    report = () => {
        return {
            X: this.x,
            Y: this.y,
            F: this.direction
        };
    }
}

export default Robot;