'use strict'
import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'
import { navigation, numbers, colors, exit } from '../src/index'

chai.use(sinonChai)

describe('Remote Control Mapping for Computer tests', () => {
    it('checks navigation key codes', () => {
        expect(navigation.keyArrowLeft).equal(37)
        expect(navigation.keyArrowUp).equal(38)
        expect(navigation.keyArrowRight).equal(39)
        expect(navigation.keyArrowDown).equal(40)
        expect(navigation.keyEnter).equal(13)
    })
    it('checks number key codes', () => {
        expect(numbers.keyNumberZero).equal(48)
        expect(numbers.keyNumberOne).equal(49)
        expect(numbers.keyNumberTwo).equal(50)
        expect(numbers.keyNumberThree).equal(51)
        expect(numbers.keyNumberFour).equal(52)
        expect(numbers.keyNumberFive).equal(53)
        expect(numbers.keyNumberSix).equal(54)
        expect(numbers.keyNumberSeven).equal(55)
        expect(numbers.keyNumberEight).equal(56)
        expect(numbers.keyNumberNine).equal(57)
    })
    it('checks color key codes', () => {
        expect(colors.keyColorRed).equal(403)
        expect(colors.keyColorGreen).equal(404)
        expect(colors.keyColorBlue).equal(405)
    })
    it('checks exit function', () => {
        expect(exit).to.be.a.instanceof(Function)
    })
})
