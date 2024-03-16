import { mountSegments } from "./mountSegments";

const testTypedNumber: string = '123'
document.body.innerHTML = '<div class="view-number__number"></div>'

describe("Should mount a segment of getted numbers", () => {
    it("Should get the typed numbers", () => {
        const toMockMountSegments = jest.fn();
        toMockMountSegments.mockImplementation(number => mountSegments(number))
        
        // do
        toMockMountSegments(testTypedNumber)
    
        // then
        expect(toMockMountSegments).toHaveReturned();
        expect(toMockMountSegments).toHaveBeenCalledTimes(1);
        expect(toMockMountSegments).toHaveBeenCalledWith(testTypedNumber);

    })
})
