export default function Counter({ children, stateFunc }) {
  return (
    <>
      <div className="counter flex flex-row gap-4 bg-blue-300 p-4">
        <button
          onClick={() => {
            stateFunc((s) => s - 1);
          }}
          className="decrement"
        >
          ➖
        </button>
        {children}
        <button
          onClick={() => {
            stateFunc((s) => s + 1);
            console.log("im here");
          }}
          className="increment"
        >
          ➕
        </button>
      </div>
    </>
  );
}
