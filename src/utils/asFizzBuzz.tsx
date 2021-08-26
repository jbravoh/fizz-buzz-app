export function asFizzBuzz(number: number): string {
  if (typeof number === "string") {
    Number(number);
  }

  if (number % 15 === 0) {
    return "FizzBuzz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else {
    return number.toString();
  }
}