/* ARRANGE, ACT AND ASSERT 

ARRANGE: to setup a test. Like arrage describe, write
ACT: Actual execution of the fuction
ASSET: to check the output function
describe: a way of grouping the test together
*/

beforeAll(() => {
    console.log("Running before all!")
})

afterAll(() => {
    console.log("Running after all!")
})

describe("sum 2 numbers", () => {
  // Arrange
  // test1
  test("should return the addition of 2 integers", () => {
    // Act
    const result = sumNumbers(2, 6);

    // Expect
    expect(result).toBe(8);
    expect(result).not.toBe(4);
    expect(result).toBeGreaterThan(5);
    expect(result).toBeLessThan(40);
  });

  // test2
  test("confirming truthy values", () => {
    expect(3 < 3).toBeFalsy();
  });
});

function sumNumbers(a: number, b: number): number {
  return a + b;
}

// ASYNC Functions
describe("fetching data", () => {
  // Arrange
  test("it should return a json object", async () => {
    // Act
    const data = await fetchData();
    // console.log(data, "====");

    // Assert
    expect(data).toEqual({
      userId: 1,
      title: "delectus aut autem",
      completed: false,
      id: 1,
    });
  });
});

async function fetchData(): Promise<string> {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return response.json();
}
