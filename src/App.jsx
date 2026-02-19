import { useState } from "react";
import Counter from "./currentComponents/Counter";
import DateTracker from "./currentComponents/DateTracker";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col gap-6 h-fit p-6">
      <div className="bg-slate-500 h-40 w-80">
        <Counter stateFunc={setStep}>{`Step : ${step}`}</Counter>
        <Counter stateFunc={setCount}>{`Count: ${count * step}`}</Counter>
        <DateTracker currentCount={count * step}></DateTracker>
      </div>
    </div>
  );
}

export default App;
