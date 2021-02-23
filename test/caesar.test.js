
const caesarModule = require("../src/caesar.js")
const expect = require("chai").expect

describe("Checking for shift value", () => {
    it("should return false if an improper shift value is used", () => {
        let input = "Advenit me frater"
        let shift = 26
        let expected = false
        let actual = caesarModule(input,shift)
        expect(actual).to.equal(expected)
    })
})

describe("Checking for shift value", () => {
    it("should return false if an improper shift value is used", () => {
        let input = "Advenit me frater"
        let shift
        let expected = false
        let actual = caesarModule(input,shift)
        expect(actual).to.equal(expected)
    })
})

describe("Checking for proper encode", () => {
    it("should return encoded message", () => {
        let input = "Advenit me frater"
        let shift = 3
        let expected = "dgyhqlw ph iudwhu"
        let actual = caesarModule(input,shift)
        expect(actual).to.equal(expected)
    })
})

describe("Checking for proper decode", () => {
    it("should return decoded message", () => {
        let input = "Dgyhqlw Ph Iudwhu"
        let shift = 3
        let encode = false
        let expected = "advenit me frater"
        let actual = caesarModule(input,shift, encode)
        expect(actual).to.equal(expected)
    })
})