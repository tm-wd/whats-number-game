import { UTILS } from "./utils"
import { GeneratedNumber } from "./utils";

describe("Should get import utils", () => {
    it("Should get import all elements from utils", () => {
        const toGetUtils = jest.fn();
        toGetUtils.mockImplementation(() => UTILS)

        // do
        toGetUtils()

        // then
        expect(toGetUtils).toHaveBeenCalled()
        expect(toGetUtils).toHaveReturned()
        expect(toGetUtils).toHaveBeenCalledTimes(1)

    })

    it("Should return a null generated number class", () => {
        const toGeneratedNumber = jest.fn();
        toGeneratedNumber.mockImplementation(() => GeneratedNumber.toGenerated)

        // do
        toGeneratedNumber()

        // then
        expect(toGeneratedNumber).toHaveBeenCalled()
        expect(toGeneratedNumber).toHaveReturned()
        expect(toGeneratedNumber).toHaveBeenCalledTimes(1)
        expect(toGeneratedNumber).toHaveReturnedWith(null)
    })
})
