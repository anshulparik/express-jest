"use strict";
/* ARRANGE, ACT AND ASSERT

ARRANGE: to setup a test. Like arrage describe, write
ACT: Actual execution of the fuction
ASSET: to check the output function
describe: a way of grouping the test together
*/
describe("sum 2 numbers", () => {
    // test1 - Arrange
    test("should return the addition of 2 integers", () => {
        // Act
        const result = sumNumbers(2, 4);
        // Expect
        expect(result).toBe(6);
    });
});
function sumNumbers(a, b) {
    return a + b;
}
//# sourceMappingURL=index.test.js.map