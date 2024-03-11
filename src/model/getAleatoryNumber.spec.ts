import { getAleatoryNumber } from "./getAleatoryNumber";

jest.mock("./getAleatoryNumber");

describe("Testing for get aleatory number to application", () => {
    it("Test getting aleatory number", () => {
        const getAleatoryNumberMock = jest.fn()
        .mockImplementation( async () => await getAleatoryNumber())

        // do
        getAleatoryNumberMock()
            
        // then
        expect(getAleatoryNumberMock).toHaveBeenCalled()
        expect(getAleatoryNumberMock).toHaveBeenCalledTimes(1);
    })

})
