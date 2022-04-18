import React, { useState, useEffect } from "react";
import CardList from "./components/CardList/CardList.component";
import SearchBox from "./components/SearchBox/SearchBox.component";
import "./App.css";

function App() {
  const [state, setState] = useState({
    monsters: [],
    searchField: "",
  });

  const { monsters, searchField } = state;

  const fetchMonsters = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((monsters) =>
        setState((prevState) => ({
          ...prevState,
          monsters: monsters,
        }))
      );
  };

  const onChangeFilter = (event) => {
    let value = event.target.value.toLowerCase();
    setState((prevState) => ({
      ...prevState,
      searchField: value,
    }));
  };

  const filteredMonsters = monsters.filter((x) =>
    x.name.toLowerCase().includes(searchField)
  );

  useEffect(() => {
    fetchMonsters();
  }, []);

  return (
    <div className="App">
      <h1 className="app-title">mosters rolodex</h1>
      <SearchBox
        onChangeFilter={onChangeFilter}
        placeholderTitle="جستجو کنید ..."
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
