// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('Checking a valid phone number with parenthesis', () => {
    expect(functions.isPhoneNumber("(123) 456-7890")).toBe(true);
});

test('Checking a valid phone number without parenthesis', () => {
    expect(functions.isPhoneNumber("123-456-7890")).toBe(true);
});

test('Checking an invalid phone number that is too short', () => {
    expect(functions.isPhoneNumber("123-456-789")).toBe(false);
});

test('Checking an invalid phone number with a letter in it', () => {
    expect(functions.isPhoneNumber("123-456-789A")).toBe(false);
});

test('Checking a valid email with a standard TLD', () => {
    expect(functions.isEmail("coleslaw@ucsd.edu")).toBe(true);
});

test('Checking a valid email with a weird TLD', () => {
    expect(functions.isEmail("jeff@ucsd.tv")).toBe(true);
});

test("Checking an invalid email with no TLD", () => {
    expect(functions.isEmail("george@gmail")).toBe(false);
});

test("Checking an invalid email with spaces", () => {
    expect(functions.isEmail("john smith@ivc.edu")).toBe(false);
});

test("Checking a strong password without an underscore", () => {
    expect(functions.isStrongPassword("A123WoRd")).toBe(true);
});

test("Checking a strong password with an underscore", () => {
    expect(functions.isStrongPassword("A12_34B")).toBe(true);
});

test("Checking a weak password that is too short", () => {
    expect(functions.isStrongPassword("A")).toBe(false);
});

test("Checking a weak password that is too long", () => {
    expect(functions.isStrongPassword("A123_456B_789C_012D")).toBe(false);
});

test("Checking a correct date that makes sense", () => {
    expect(functions.isDate("12/23/1999")).toBe(true);
});

test("Checking a correct date that doesn't make sense", () => {
    expect(functions.isDate("99/99/9999")).toBe(true);
});

test("Checking an incorrect date with a two digit year", () => {
    expect(functions.isDate("11/11/11")).toBe(false);
});

test("Checking an incorrect date with only a month and year", () => {
    expect(functions.isDate("2/2021")).toBe(false);
});

test("Checking a valid 3-digit color code", () => {
    expect(functions.isHexColor("#FFF")).toBe(true);
});

test("Checking a valid 6-digit color value", () => {
    expect(functions.isHexColor("000000")).toBe(true);
});

test("Checking an invalid 3-digit color code with digits too high", () => {
    expect(functions.isHexColor("#FGG")).toBe(false);
});

test("Checking an invalid color code that does not have the correct number of digits", () => {
    expect(functions.isHexColor("FFFF")).toBe(false);
});