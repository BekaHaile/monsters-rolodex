import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { useState, useEffect } from "react";
import { SearchBox } from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  useEffect(() => {
    const searchFun = async () => {
      console.log("searching");
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const resJson = await response.json();
      const users = resJson.filter((monster) =>
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
      setFilteredMonsters(users);
    };

    searchFun();
  }, [searchField]);

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox
        placeholder="Search monsters"
        search={(event) => setSearchField(event.target.value)}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
