import { compareNumber } from "./compareNumber";
jest.mock("../services/feedback")

document.body.innerHTML = '<div class="view-number__number"></div>';

describe("Should compare typed number and hint number to game", () => {

    const testNumber1 = '123';
    const testNumber2 = '345'

    it("Should compare numbers", () => {
        const toMockCompareNumbers = jest.fn();
        toMockCompareNumbers.mockImplementation((number1, number2) => compareNumber(number1, number2))

        // do
        toMockCompareNumbers(testNumber1, testNumber2)

        // then
        expect(toMockCompareNumbers).toHaveReturned();
        expect(toMockCompareNumbers).toHaveBeenCalledTimes(1);
        expect(toMockCompareNumbers).toHaveBeenCalledWith(testNumber1, testNumber2);
        expect(toMockCompareNumbers).toHaveReturnedWith({typeNumber: Number(testNumber1), hintNumber: testNumber2});
    })
})
