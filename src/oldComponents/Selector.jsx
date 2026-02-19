export default function Selector({
  number,
  selectorNumber,
  currentNumber,
  key,
}) {
  return (
    <div
      key={key}
      onClick={selectorNumber}
      className={`h-10 w-10 rounded-full text-white font-bold bg-blue-700 flex items-center justify-center hover:bg-blue-500 cursor-pointer ${currentNumber === number ? "selected" : undefined} `}
    >
      <p>{number}</p>
    </div>
  );
}
