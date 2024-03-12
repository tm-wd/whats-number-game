import { 
    startNumber, 
    toKeyPressed,
    toKeyLiftedUp,
    toKeyClicked
} from "./startNumber";

jest.mock("../services")

describe("Should start a new number, KeyPress, KeyUp and click event", () => {

    beforeAll(() => {
        document.body.innerHTML = '<input id="inputNumber"/>';
        document.body.innerHTML = '<button id="buttonNumber/>'
    })

    it("Should start a new number", () => {
        const toMockStartNumber = jest.fn()
            .mockImplementation(() => startNumber())

        // do
        toMockStartNumber()

        // then
        expect(toMockStartNumber.mock.results[0].type).toBe('return')
        expect(toMockStartNumber.mock.results[0].value).toBeTruthy()
        expect(toMockStartNumber).toHaveBeenCalled()
        expect(toMockStartNumber).toHaveBeenCalledTimes(1);
    })

    it("Should be Key Pressed", () => {
        const isInputNumber = document.querySelector('#inputNumber');

        const toMockKeyPressTest = jest.fn();
        toMockKeyPressTest.mockImplementation(() => {
            isInputNumber?.addEventListener('keypress', (e:any) => toKeyPressed(e))
            isInputNumber?.dispatchEvent(new KeyboardEvent('keypress', {'code':'Digit1'} ));
        })

        // do
        toMockKeyPressTest()

        // then
        expect(toMockKeyPressTest).toHaveBeenCalled()
    })

    it("Should be Key Lifted Up", () => {
        const isInputNumber = document.querySelector('#inputNumber');

        const toMockKeyLiftedUp = jest.fn();
        toMockKeyLiftedUp.mockImplementation(() => {
            isInputNumber?.addEventListener('keyup', (e:any) => toKeyLiftedUp(e))
            isInputNumber?.dispatchEvent(new KeyboardEvent('keyup', {'code':'Digit8'} ));
        })

        // do
        toMockKeyLiftedUp()

        // then
        expect(toMockKeyLiftedUp).toHaveBeenCalled()
    })

    it("Should be click button send", () => {
        const isButtonNumber = document.querySelector('#buttonNumber');

        const toMockButtonSend = jest.fn();
        toMockButtonSend.mockImplementation(() => {
            (isButtonNumber as HTMLButtonElement)?.click()
            isButtonNumber?.addEventListener('click', (e) => toKeyClicked(e))
        })

        // do
        toMockButtonSend()

        // then
        expect(toMockButtonSend).toHaveBeenCalled()
    })
})
