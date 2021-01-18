import { isValidDirection, getDirectionByDegree, getDirectionMoment, getDirectionDegree } from "./../../utils/DirectionUtils.js";

test('Test Case Success scenario Valid Direction', () => {
    expect(isValidDirection('NORTH')).toBe(true);
});

test('Test Case Failed scenario invalid direction', () => {
    expect(isValidDirection('testing')).toBe(false);
});

test('Test Case Success scenario invalid direction', () => {
    expect(isValidDirection(1)).toBe(false);
});

test('Test Case Success scenario degree as per provided correct direction', () => {
    expect(getDirectionDegree('NORTH')).toBe(0);
});

test('Test Case Failed scenario degree as per provided incorrect facing', () => {
    expect(() => getDirectionDegree('hello')).toThrow();
});

test('Test Case Success scenario move as per provided correct direction', () => {
    expect(getDirectionMoment('NORTH')).toEqual([0, 1]);
});

test('Test Case Failed scenario move as per provided incorrect direction', () => {
    expect(() => getDirectionMoment('byebye')).toThrow();
});

test('Test Case Failed scenario directions as per provided degree (55)', () => {
    expect(() => getDirectionByDegree("55")).toThrow();
});

test('Test Case Failed scenario directions as per provided degree (45)', () => {
    expect(() => getDirectionByDegree("45")).toThrow();
});

test('Test Case Success scenario direction as per provided degree', () => {
    expect(getDirectionByDegree(0)).toBe('NORTH');
});

test('Test Case Success scenario direction as per provided degree', () => {
    expect(getDirectionByDegree(90)).toBe('EAST');
});

test('Test Case Success scenario direction as per provided degree', () => {
    expect(getDirectionByDegree(180)).toBe('SOUTH');
});

test('Test Case Success scenario direction as per provided degree', () => {
    expect(getDirectionByDegree(270)).toBe('WEST');
});