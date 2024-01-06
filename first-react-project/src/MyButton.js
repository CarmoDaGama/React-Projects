import { useState } from "react";
export default function MyButton() {
  const [count, setCount] = useState(0);
  
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button className="App-link" onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
