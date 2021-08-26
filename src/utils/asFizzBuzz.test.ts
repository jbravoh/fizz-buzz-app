import { asFizzBuzz } from "./asFizzBuzz";

test("greet returns a string, greeting the passed name", () => {
  expect(asFizzBuzz(15)).toBe("FizzBuzz");
  expect(asFizzBuzz(3)).toBe("Fizz");
  expect(asFizzBuzz(11)).toBe("11");
});
