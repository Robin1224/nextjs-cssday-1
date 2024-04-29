import Navigation from "./components/Navigation";
import TalksList from "./components/TalksList";

async function getData() {
  const res = await fetch("https://cssday.nl/data.json");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <>
      <Navigation data={data} />
      <TalksList data={data} />
    </>
  );
}
