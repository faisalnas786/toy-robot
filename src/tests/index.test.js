import Vorpal from "vorpal";
import { vorpal } from './../index.js';
import { exec } from 'child_process';

let run = (args) => {
    return exec("node", ["./../src/index.js"].concat(args)).stdout;
};

test('TestCase of PLACE SUCCESS', () => {
    vorpal.exec('PLACE 0,0,NORTH', {}, (error, data) => {
        expect(error).not.toBeDefined();
        expect(data).toBe(true);
    });
});

test('TestCase of PLACE, REPORT', () => {
    vorpal.exec('PLACE 0,0,NORTH', {}, (error, data) => {
        expect(error).not.toBeDefined();
        expect(data).toBe(true);
    });
    vorpal.exec('REPORT', {}, (error, data) => {
        expect(error).not.toBeDefined();
        expect(data).toEqual({
            X: 0,
            Y: 0,
            F: 'NORTH'
        });
    });
});

test('TestCase of PLACE, MOVE', () => {
    vorpal.exec('PLACE 0,0,NORTH', {}, (error, data) => {
        expect(error).not.toBeDefined();
        expect(data).toBe(true);
    });
    vorpal.exec('MOVE', {}, (error, data) => {
        expect(error).not.toBeDefined();
        expect(data).toBe(true);
    });
});

test('TestCase of PLACE, RIGHT', () => {
    vorpal.exec('PLACE 0,0,NORTH', {}, (error, data) => {
        expect(error).not.toBeDefined();
        expect(data).toBe(true);
    });
    vorpal.exec('RIGHT', {}, (error, data) => {
        expect(error).not.toBeDefined();
        expect(data).toBe(true);
    });
});

test('TestCase of PLACE, LEFT', () => {
    vorpal.exec('PLACE 0,0,NORTH', {}, (error, data) => {
        expect(error).not.toBeDefined();
        expect(data).toBe(true);
    });
    vorpal.exec('LEFT', {}, (err, data) => {
        expect(err).not.toBeDefined();
        expect(data).toBe(true);
    });
});

test('TestCase of PLACE, MOVE, REPORT', () => {
    vorpal.exec('PLACE 0,0,NORTH', {}, (error, data) => {
        expect(error).not.toBeDefined();
        expect(data).toBe(true);
    });
    vorpal.exec('MOVE', {}, (error, data) => {
        expect(error).not.toBeDefined();
        expect(data).toBe(true);
    });
    vorpal.exec('REPORT', {}, (error, data) => {
        expect(error).not.toBeDefined();
        expect(data).toEqual({
            X: 0,
            Y: 1,
            F: 'NORTH'
        });
    });
});

test('TestCase of PLACE, LEFT, REPORT', () => {
    vorpal.exec('PLACE 0,0,NORTH', {}, (error, data) => {
        expect(error).not.toBeDefined();
        expect(data).toBe(true);
    });
    vorpal.exec('LEFT', {}, (error, data) => {
        expect(error).not.toBeDefined();
        expect(data).toBe(true);
    });
    vorpal.exec('REPORT', {}, (error, data) => {
        expect(error).not.toBeDefined();
        expect(data).toEqual({
            X: 0,
            Y: 0,
            F: 'WEST'
        });
    });
});

test('TestCase of PLACE, RIGHT, REPORT', () => {
    vorpal.exec('PLACE 0,0,NORTH', {}, (error, data) => {
        expect(error).not.toBeDefined();
        expect(data).toBe(true);
    });
    vorpal.exec('LEFT', {}, (error, data) => {
        expect(error).not.toBeDefined();
        expect(data).toBe(true);
    });
    vorpal.exec('REPORT', {}, (error, data) => {
        expect(error).not.toBeDefined();
        expect(data).toEqual({
            X: 0,
            Y: 0,
            F: 'WEST'
        });
    });
});

test('TestCase of PLACE, MOVE, LEFT , MOVE, REPORT', () => {
    vorpal.exec('PLACE 1,2,EAST', {}, (error, data) => {
        expect(error).not.toBeDefined();
        expect(data).toBe(true);
    });
    vorpal.exec('MOVE', {}, (error, data) => {
        expect(error).not.toBeDefined();
        expect(data).toBe(true);
    });
    vorpal.exec('LEFT', {}, (error, data) => {
        expect(error).not.toBeDefined();
        expect(data).toBe(true);
    });
    vorpal.exec('MOVE', {}, (error, data) => {
        expect(error).not.toBeDefined();
        expect(data).toBe(true);
    });
    vorpal.exec('REPORT', {}, (error, data) => {
        expect(error).not.toBeDefined();
        expect(data).toEqual({
            X: 2,
            Y: 3,
            F: 'NORTH'
        });
    });
});

test('TestCase of PLACE, MOVE, RIGHT , MOVE, REPORT', () => {
    vorpal.exec('PLACE 1,2,WEST', {}, (error, data) => {
        expect(error).not.toBeDefined();
        expect(data).toBe(true);
    });
    vorpal.exec('MOVE', {}, (error, data) => {
        expect(error).not.toBeDefined();
        expect(data).toBe(true);
    });
    vorpal.exec('RIGHT', {}, (error, data) => {
        expect(error).not.toBeDefined();
        expect(data).toBe(true);
    });
    vorpal.exec('MOVE', {}, (error, data) => {
        expect(error).not.toBeDefined();
        expect(data).toBe(true);
    });
    vorpal.exec('REPORT', {}, (error, data) => {
        expect(error).not.toBeDefined();
        expect(data).toEqual({
            X: 0,
            Y: 3,
            F: 'NORTH'
        });
    });
});

test('TestCase of PLACE, LEFT, RIGHT , MOVE, REPORT', () => {
    vorpal.exec('PLACE 0,0,NORTH', {}, (error, data) => {
        expect(error).not.toBeDefined();
        expect(data).toBe(true);
    });
    vorpal.exec('LEFT', {}, (error, data) => {
        expect(error).not.toBeDefined();
        expect(data).toBe(true);
    });
    vorpal.exec('RIGHT', {}, (error, data) => {
        expect(error).not.toBeDefined();
        expect(data).toBe(true);
    });
    vorpal.exec('MOVE', {}, (error, data) => {
        expect(error).not.toBeDefined();
        expect(data).toBe(true);
    });
    vorpal.exec('REPORT', {}, (error, data) => {
        expect(error).not.toBeDefined();
        expect(data).toEqual({
            X: 0,
            Y: 1,
            F: 'NORTH'
        });
    });
});

test('TestCase of PLACE, RIGHT, LEFT , MOVE, REPORT', () => {
    vorpal.exec('PLACE 0,0,NORTH', {}, (error, data) => {
        expect(error).not.toBeDefined();
        expect(data).toBe(true);
    });
    vorpal.exec('RIGHT', {}, (error, data) => {
        expect(error).not.toBeDefined();
        expect(data).toBe(true);
    });
    vorpal.exec('LEFT', {}, (error, data) => {
        expect(error).not.toBeDefined();
        expect(data).toBe(true);
    });
    vorpal.exec('MOVE', {}, (error, data) => {
        expect(error).not.toBeDefined();
        expect(data).toBe(true);
    });
    vorpal.exec('REPORT', {}, (error, data) => {
        expect(error).not.toBeDefined();
        expect(data).toEqual({
            X: 0,
            Y: 1,
            F: 'NORTH'
        });
    });
});