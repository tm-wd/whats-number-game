import { start } from "./start";
jest.mock('../model/getAleatoryNumber')

describe("Should get return an aleatory number for app", () => {
    it("Should get an aleatory number", async () => {
        const toMockStartApp = jest.fn();
        toMockStartApp.mockImplementation(() => {
            return setTimeout(() => Promise.resolve(start())) 
        });

        // do
        await toMockStartApp();

        // then
        expect(toMockStartApp).toHaveBeenCalled();
        expect(toMockStartApp).toHaveReturned();
        expect(toMockStartApp).toHaveBeenCalledTimes(1);
    })
})
