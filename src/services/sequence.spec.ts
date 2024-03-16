import { mount } from "./sequence";

const testNumber = '2';

describe("Should return a formated sequence of choose numbers", () => {
    it("Should return a sequence of numbers", () => {
        const toMockMountNumber = jest.fn();
        toMockMountNumber.mockImplementation(() => mount(testNumber))

        // do
        toMockMountNumber()

        // then
        expect(toMockMountNumber).toHaveBeenCalled();
        expect(toMockMountNumber).toHaveReturned();
        expect(toMockMountNumber).toHaveBeenCalledTimes(1);
    })
})
