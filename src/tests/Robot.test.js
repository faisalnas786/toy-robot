import {initializeRobotInstance} from "./../utils/Initializer.js";
import Messages from "./../messages/Messages.js";

test('Robot Instantiation Test Case ', () => {
    let robot = initializeRobotInstance();
    expect(robot.surface.height).toBe(5);
    expect(robot.surface.width).toBe(5);
    expect(robot.y).toBe(null);
    expect(robot.x).toBe(null);
    expect(robot.direction).toBe(null);
});

test('TestCase invalid direction of robot', () => {
    let robot = initializeRobotInstance();
    robot.setDirection('NORTH');
    expect(robot.direction).toBe('NORTH');
});

test('TestCase invalid direction of robot', () => {
    let robot = initializeRobotInstance();
    expect(() => robot.setDirection(1))
        .toThrow(new Error(Messages.robot.invalidParam));
});

test('TestCase valid direction of robot (NORTH)', () => {
    let robot = initializeRobotInstance();
    robot.setDirection('NORTH');
    expect(robot.direction).toBe('NORTH');
});


test('TestCase Rotate the robot anti-clock wise', () => {
    let robot = initializeRobotInstance();
    expect(robot.left()).toBe(false);
});

test('TestCase Rotate the robot anti-clock wise', () => {
    let robot = initializeRobotInstance();
    robot.place(0, 0, 'NORTH');
    expect(robot.left()).toBe(true);
});

test('TestCase Rotate the robot clock wise', () => {
    let robot = initializeRobotInstance();
    expect(robot.right()).toBe(false);
});

test('Rotate the robot clock wise', () => {
    let robot = initializeRobotInstance();
    robot.place(0, 0, 'NORTH');
    expect(robot.right()).toBe(true);
});

test('Test Case invalid direction of robot (TEST)', () => {
    let robot = initializeRobotInstance();
    expect(() => robot.setDirection("TEST"))
        .toThrow(new Error(Messages.robot.invalidParamValue + "TEST"));
});

test('Test Case valid placement of robot (SOUTH)', () => {
    let robot = initializeRobotInstance();
    expect(robot.place(0, 0, 'SOUTH')).toBe(true);
});

test('Test Case invalid movement of robot (NORTH)', () => {
    let robot = initializeRobotInstance();
    robot.place(4, 4, 'NORTH');
    expect(() => robot.move()).toThrow();
});

test('Test Case invalid placement of robot (NORTH)', () => {
    let robot = initializeRobotInstance();
    expect(() => robot.place(5.01, 5.1, 'NORTH')).toThrow();
});

test('Test Case valid direction of robot (NORTH)', () => {
    let robot = initializeRobotInstance();
    robot.setDirection('NORTH');
    expect(robot.direction).toBe('NORTH');
});

test('Test Case valid movement of robot (NORTH)', () => {
    let robot = initializeRobotInstance();
    robot.place(0, 0, 'NORTH');
    expect(robot.move()).toBe(true);
});

test('REPORT [X], [Y] Coordinates and [F] facing direction', () => {
    let robot = initializeRobotInstance();
    robot.place(0, 0, 'NORTH');
    expect(robot.report()).toEqual({
        X: 0,
        Y: 0,
        F: 'NORTH'
    });
});