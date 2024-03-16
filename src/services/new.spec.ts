import { newNumber } from "./new";
import { UTILS } from "./utils";

describe("Should return a generated new number", () => {
    document.body.innerHTML = '<button class="new-number">Restart</button>';
    UTILS.NEWNUMBER = document.querySelector('.new-number');

    it("Should return a new number", () => {
        const toMockNewNumber = jest.fn();
        toMockNewNumber.mockImplementation(() => newNumber())

        // do
        toMockNewNumber()

        // then
        expect(toMockNewNumber).toHaveReturned();
        expect(toMockNewNumber).toHaveBeenCalledTimes(1);
    })
})
