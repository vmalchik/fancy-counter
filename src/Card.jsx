import { useState } from "react";
import Count from "./Count";
import ButtonsContainer from "./ButtonContainer";
import ResetButton from "./ResetButton";
import Title from "./Title";

export default function Card() {
  // When state changes (e.g. count is updated) then all child components of Card
  // will re-render unless they are optimized with React.memo or useMemo
  const [count, setCount] = useState(0);

  // No need to use useState for locked as it is derived from count
  const locked = count === 5;

  return (
    <div className={`card ${locked && "card--limit"}`}>
      <Title locked={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonsContainer locked={locked} setCount={setCount} />
    </div>
  );
}
