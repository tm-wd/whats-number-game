import { feedback } from "./feedback";

const testParams = {
    classTest: 'feedback-test',
    textTest: 'text-test'
}

describe("Should return the feedback span of interating number", () => {
    it("Should return the feedback", () => {
        const toMockFeedback = jest.fn();
        const { classTest, textTest } = testParams;
        toMockFeedback.mockImplementation(() => feedback(classTest, textTest))

        // do
        toMockFeedback()

        // then
        expect(toMockFeedback).toHaveReturned();
        expect(toMockFeedback).toHaveBeenCalledTimes(1);
    })
})
