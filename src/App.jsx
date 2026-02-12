//* Social Media Post Data
import Post from "./Post";
import ProfileCard from "./ProfileCard";

async function getPokemon() {
  const url = `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 152)}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.sprites.front_default);

  return {
    image: data.sprites.front_default,
    name: data.name,
    role: "Pokemon",
  };
}

getPokemon();

function App() {
  return (
    <div className="global-container  bg-black  border-2 border-blue-900 mx-auto h-full ">
      <ProfileCard {...getPokemon()}></ProfileCard>
    </div>
  );
}

export default App;
