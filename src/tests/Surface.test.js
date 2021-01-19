import {initializeSurfaceInstance} from "./../utils/Initializer.js";

test('Verify if Surface instatiation is Good', () => {
    let surface = initializeSurfaceInstance(5,5);
    expect(surface.width).toBe(5);
    expect(surface.height).toBe(5);
});

test('Validate if the table surface goes beyond width', () => {
    let surface = initializeSurfaceInstance(5,5);
    expect(surface.checkSurfaceOutOfBound(6, 1)).toBe(true);
});

test('Validate boundary value analysis for width', () => {
    let surface = initializeSurfaceInstance(5,5);
    expect(surface.checkSurfaceOutOfBound(5.001, 1)).toBe(true);
});

test('Validate boundary value analysis for height', () => {
    let surface = initializeSurfaceInstance(5,5);
    expect(surface.checkSurfaceOutOfBound(1, 5.001)).toBe(true);
});

test('Validate if table surface is in negative', () => {
    let surface = initializeSurfaceInstance(5,5);
    expect(surface.checkSurfaceOutOfBound(-1, -1)).toBe(true);
});

test('Validate if the table surface is upto given values', () => {
    let surface = initializeSurfaceInstance(5,5);
    expect(surface.checkSurfaceOutOfBound(1, 1)).toBe(false);
});

test('Validate if the table surface goes beyond height', () => {
    let surface =initializeSurfaceInstance(5,5);
    expect(surface.checkSurfaceOutOfBound(1, 6)).toBe(true);
});