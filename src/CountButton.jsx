import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";

// Good example of need for TypeScript as this component can accept any string
export default function CountButton({ locked, type, setCount }) {
  const handleClick = () => {
    setCount((prev) =>
      type === "increment" ? Math.min(prev + 1, 1000) : Math.max(prev - 1, 0)
    );
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
