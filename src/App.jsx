import { useEffect, useState } from "react";
import "./App.css";
import Person from "./components/Person";
import { API_KEY, TMDB_BASE } from "./utils/api";
import Pagination from "./components/Pagination";

function App() {
  const searchQuery = "spielberg";

  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `${TMDB_BASE}/search/person?query=${searchQuery}&api_key=${API_KEY}`
        );
        const data = await res.json();
        setPeople(data.results || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return <p>Loading</p>;
  }

  if (!people || !people.length) {
    return <p>No Data</p>;
  }

  const totalPeople = people.length;

  return (
    <div
      style={{
        margin: "50px 0",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          width: "80%",
          maxWidth: "650px",
        }}
      >
        <Person person={people[currentIndex - 1]} />
        <Pagination
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          totalPeople={totalPeople}
        />
      </div>
    </div>
  );
}

export default App;
