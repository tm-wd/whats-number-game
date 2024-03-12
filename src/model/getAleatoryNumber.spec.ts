import { getAleatoryNumber } from "./getAleatoryNumber";
import { API } from "./getAleatoryNumber";

jest.mock("./getAleatoryNumber");

describe("Testing for get aleatory number to application", () => {

    it('Test calling API', () => {
        const callingAPIMock = jest.fn()
            .mockImplementation(async () => await API())

        // do
        callingAPIMock()   
    
        // then
        expect(callingAPIMock.mock.results[0].value).toBeTruthy()
        expect(callingAPIMock).toHaveBeenCalled()
        expect(callingAPIMock).toHaveBeenCalledTimes(1);
    })
    
    it("Test getting aleatory number", () => {
        const getAleatoryNumberMock = jest.fn()
        .mockImplementation(async () => await getAleatoryNumber())

        // do
        getAleatoryNumberMock()
            
        // then
        expect(getAleatoryNumberMock).toHaveBeenCalled()
        expect(getAleatoryNumberMock).toHaveBeenCalledTimes(1);
    })

})
