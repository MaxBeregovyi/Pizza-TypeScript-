import React, { FC, useState } from "react";
import "./App.css";
import AddPizzaForm from "./components/AddPizzaForm";
import Pizza from "./models/Pizza";
import DisplayPizza from "./components/DisplayPizza";

const App: FC = () => {
  const [pizzaList, setPizzaList] = useState<Pizza[]>([]);

  const addPizza = (newPizza: Pizza) => {
    setPizzaList([...pizzaList, newPizza]);
  };
  const updatePizza = (newPizza: Pizza) => {
    setPizzaList(
      pizzaList.map((pizza) => (pizza.id === newPizza.id ? newPizza : pizza)),
    );
  };
  const deletePizza = (id: number) => {
    const newPizzaList = pizzaList.filter((pizza) => pizza.id !== id);
    setPizzaList(newPizzaList);
  };

  return (
    <div className="App">
      <div className={"wrap"}>
        <span className={"heading"}>Наша піцерія</span>
        <AddPizzaForm addPizza={addPizza} />
        <DisplayPizza
          pizzasList={pizzaList}
          updatePizza={updatePizza}
          deletePizza={deletePizza}
        />
      </div>
    </div>
  );
};

export default App;
