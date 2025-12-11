import React, { useMemo, useState } from "react";

export default function Counter({ HeaveyCal }) {
  const [count, setcount] = useState(0);

  return (
    <div>
      <HeaveyCal />
      <button onClick={() => setcount(count + 1)}>{count}</button>
    </div>
  );
}

export const HeaveyCal = () => {
  const sumF = useMemo(() => {
    console.log("Heavy Child");
    let sum = 0;
    for (let i = 0; i < 10000000; i++) {
      sum += i;
    }
    console.log(sum);
    return sum;
  }, []);

  return (
    <>
      <div>`sum is ${sumF}`</div>
    </>
  );
};

