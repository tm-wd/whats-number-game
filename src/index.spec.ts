import { startNumber } from "./components/startNumber";

jest.mock('./services')

describe('Should start app what\'s number', () => {
    it('Should start app', async () => {

        const startMockNumber = jest
            .fn()
            .mockImplementation(() => {
                return setTimeout(() => Promise.resolve(startNumber())) 
            })

        // do
        await startMockNumber()

        // then
        expect(startMockNumber).toHaveBeenCalled();
        expect(startMockNumber).toHaveReturned();
        expect(startMockNumber).toHaveBeenCalledTimes(1)
    })
})
