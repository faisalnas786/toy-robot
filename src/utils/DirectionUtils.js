import Directions from './../Directions.js';
import Messages from './../messages/Messages';

/*
 * Validate direction AND if
 * NORTH, SOUTH, EAST, WEST
 */
let isValidDirection = (direction) => {
    if (!direction || typeof direction !== "string") 
        return false;
    else 
        return (typeof Directions[direction] !== "undefined");
};

/*
 * Get Direction according to provided degree
 */
let getDirectionByDegree = (degree) => {
    if (isNaN(degree) || typeof degree !== "number") 
        throw new Error(Messages.utils.invalidDegree + degree);

    const rDegree = parseInt((degree + 360) % 360, 10);
    for (let f in Directions) {
        if (rDegree === Directions[f].degree) return f;
    }

    throw new Error(Messages.utils.invalidDegree + degree);
};

/*
 * Get move according to provided direction
 */
let getDirectionMoment = (direction) => {
    if (!isValidDirection(direction)) 
        throw new Error(Messages.utils.invalidDirection + direction);
    return Directions[direction].move;
};

/*
 * Get degree according to provided direction
 */
let getDirectionDegree = (direction) => {
    if (!isValidDirection(direction)) 
        throw new Error(Messages.utils.invalidDirection + direction);
    return Directions[direction].degree;
};

export {isValidDirection, getDirectionByDegree, getDirectionMoment, getDirectionDegree}