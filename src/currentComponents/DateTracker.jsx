export default function DateTracker({ currentCount = 0 }) {
  const date = new Date();
  date.setDate(date.getDate() + currentCount);
  return (
    <div className="bg-orange-300 p-6">
      <p>{` ${currentCount} days from Today is ${date.toDateString()}`}</p>
    </div>
  );
}
