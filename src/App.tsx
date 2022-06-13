import React, { useState, useEffect,ChangeEvent } from "react";
import CardList from "./components/CardList/CardList.component";
import SearchBox from "./components/SearchBox/SearchBox.component";
import { getData } from "./utils/data.utils";
import "./App.css";

type Monster = {
  id: string;
  name: string;
  email: string;
};

type typeState = {
  monsters: Monster[];
  searchField: string;
};

function App() {
  const [state, setState] = useState<typeState>({
    monsters: [],
    searchField: "",
  });

  const { monsters, searchField } = state;

  const fetchMonsters = async () => {
    const monsters = await getData<Monster[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
    if (monsters) {
      setState((prevState) => ({
              ...prevState,
              monsters: monsters,
            }))
    }
  };

  const onChangeFilter = (event:ChangeEvent<HTMLInputElement>):void => {
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
