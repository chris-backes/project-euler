const { expect } = require("@jest/globals")
const { findMultiples, findMultiples2 } = require('../001m35')
const evenFib = require('../002efn')
const form003 = require('../003lpf')
const form004 = require('../004lpp')

const { tripletProduct, tripletProduct2, tripletProduct3 } = require('../009spt')

test('checks the first problem', () => {
    const num1 = {
        value: 400,
        solution: 37268,
        additionalParams: [3, 5]
    }
    const num2 = {
        value: 500,
        solution: 57918,
        additionalParams: [3, 5]
    }

    expect(findMultiples(num1.value)).toBe(num1.solution)
    expect(findMultiples(num2.value)).toBe(num2.solution)
    expect(findMultiples2(num1.value, num1.additionalParams[0], num1.additionalParams[1])).toBe(num1.solution)
    expect(findMultiples2(num2.value, num2.additionalParams[0], num2.additionalParams[1])).toBe(num2.solution)
})

test('checks the second problem', () => {
    const num1 = {
        value: 150,
        solution: 188
    }
    const num2 = {
        value: 50,
        solution: 44
    }

    expect(evenFib(num1.value)).toBe(num1.solution)
    expect(evenFib(num2.value)).toBe(num2.solution)
})

test('checks third problem', () => {
    const num1 = {
        value: 51,
        solution: 17
    }
    const num2 = {
        value: 516,
        solution: 43
    }

    expect(form003(num1.value)).toBe(num1.solution)
    expect(form003(num2.value)).toBe(num2.solution)
})

test('checks fourth problem', () => {
    const num1 = {
        value: 99,
        solution: "9009"
    }
    expect(form004(num1.value, num1.value)).toBe(num1.solution)
})

test('checks ninth problem', () => {
    const num1 = {
        value: 12,
        solution: 60
    }
    const num2 = {
        value: 70,
        solution: 12180
    }
    const num3 = {
        value: 1000,
        solution: 31875000
    }
    const num4 = {
        value: 50,
        solution: "Nothing found"
    }
    expect(tripletProduct(num1.value)).toBe(num1.solution)
    expect(tripletProduct2(num1.value)).toBe(num1.solution)
    expect(tripletProduct3(num1.value)).toBe(num1.solution)
    expect(tripletProduct(num2.value)).toBe(num2.solution)
    expect(tripletProduct2(num2.value)).toBe(num2.solution)
    expect(tripletProduct3(num2.value)).toBe(num2.solution)
    expect(tripletProduct(num3.value)).toBe(num3.solution)
    expect(tripletProduct2(num3.value)).toBe(num3.solution)
    expect(tripletProduct3(num3.value)).toBe(num3.solution)
    expect(tripletProduct(num4.value)).toBe(num4.solution)
    expect(tripletProduct2(num4.value)).toBe(num4.solution)
    expect(tripletProduct3(num4.value)).toBe(num4.solution)
})