import { useEffect, useState } from "react";
import Count from "./Count";
import CountButton from "./CountButton";
import ButtonsContainer from "./ButtonContainer";
import ResetButton from "./ResetButton";
import Title from "./Title";

const MAX_FREE_COUNT = 5;

export default function Card() {
  // When state changes (e.g. count is updated) then all child components of Card
  // will re-render unless they are optimized with React.memo or useMemo
  const [count, setCount] = useState(0);

  // No need to use useState for locked as it is derived from count
  const locked = count === MAX_FREE_COUNT;

  // on mount enable keyboard events
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space") {
        setCount((prev) => Math.min(prev + 1, MAX_FREE_COUNT));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    // cleanup event listener on unmount
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonsContainer>
        <CountButton locked={locked} setCount={setCount} type="decrement" />
        <CountButton locked={locked} setCount={setCount} type="increment" />
      </ButtonsContainer>
    </div>
  );
}
