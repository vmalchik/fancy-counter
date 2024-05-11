import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";

// Good example of need for TypeScript as this component can accept any string
export default function CountButton({ locked, type, setCount }) {
  const handleClick = (event) => {
    setCount((prev) =>
      type === "increment" ? prev + 1 : Math.max(prev - 1, 0)
    );
    event.currentTarget.blur(); // remove focus after click to prevent keyboard events from firing
  };

  return (
    <button disabled={locked} onClick={handleClick} className="count-btn">
      {type == "increment" ? (
        <PlusIcon className="count-btn-icon" />
      ) : (
        <MinusIcon className="count-btn-icon" />
      )}
    </button>
  );
}
