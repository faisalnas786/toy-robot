import chalk from "chalk";

/*
 * Checking if toy robot has been positioned/placed on tabletop
 */
let Logs = (...args) => {
    let msg, color;
    [msg, color] = args;
    if (color === "red")
        process.stdout.write(chalk.red(msg));
    else
        process.stdout.write(chalk.blue(msg));
};

/**
 * 
 * Logging chalk will come here
 */
let NewException = args => {
    throw new Error(args);
};

export {Logs, NewException}