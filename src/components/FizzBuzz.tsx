import { useState } from "react";
import { asFizzBuzz } from "../utils/asFizzBuzz";

export function FizzBuzz(): JSX.Element {
  const [counterValue, setCounterValue] = useState<number>(1);
  const [storedValue, setStoredValue] = useState<(string | number)[]>([1]);

  const handleIncrement = () => {
      setCounterValue((prev) => prev + 1);
      setStoredValue((prev) => [...prev, asFizzBuzz(counterValue + 1)])}
  

  return (
    <>
      <h1>Fizz Buzz App</h1>
      <p>{storedValue.join(", ")}</p>
      <button onClick={handleIncrement}>Next</button>
    </>
  );
}
