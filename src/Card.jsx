import { useState } from "react";
import Count from "./Count";
import ButtonsContainer from "./ButtonContainer";
import ResetButton from "./ResetButton";
import Title from "./Title";

export default function Card() {
  // When state changes (e.g. count is updated) then all child components of Card
  // will re-render unless they are optimized with React.memo or useMemo
  const [count, setCount] = useState(0);
  return (
    <div className="card">
      <Title />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonsContainer setCount={setCount} />
    </div>
  );
}
