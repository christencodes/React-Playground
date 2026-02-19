export default function Post({ username, timestamp, content, likes }) {
  return (
    <div className="flex flex-col gap-4 p-6  bg-slate-700 rounded-xl shadow-white/20 shadow-lg min-w-full ">
      <p className="font-light text-4xl ">@{username}</p>
      <div className="flex gap-6 items-center">
        <p className="text-sm">⌚{timestamp}</p>
        <p className="text-white">👍🏾{likes}</p>
      </div>

      <p>{content}</p>
    </div>
  );
}
