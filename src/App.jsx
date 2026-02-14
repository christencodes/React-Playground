import Selector from "./Selector";
import { useState } from "react";
import { businessCards } from "../businessCardData";
import UserCard from "./assets/UserCard";

function App() {
  return (
    <div className="flex flex-col gap-6 h-fit p-6">
      {businessCards.map((info) => (
        <UserCard {...info} key={info.id} />
      ))}
    </div>
  );
}

export default App;
