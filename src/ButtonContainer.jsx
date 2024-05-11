import CountButton from "./CountButton";

// Note: Undesirable prop drilling. This component should be refactored to use React Context or Redux
export default function ButtonContainer({ locked, setCount }) {
  return (
    <div className="button-container">
      <CountButton locked={locked} setCount={setCount} type="decrement" />
      <CountButton locked={locked} setCount={setCount} type="increment" />
    </div>
  );
}
