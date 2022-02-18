const { expect } = require("@jest/globals")
const form001 = require('../001m35')
const form002 = require('../002efn')
const form003 = require('../003lpf')
const form004 = require('../004lpp')

test('checks the first problem', () => {
    const num1 = {
        value: 400,
        solution: 37268
    }
    const num2 = {
        value: 500,
        solution: 57918
    }

    expect(form001(num1.value)).toBe(num1.solution)
    expect(form001(num2.value)).toBe(num2.solution)
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

    expect(form002(num1.value)).toBe(num1.solution)
    expect(form002(num2.value)).toBe(num2.solution)
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