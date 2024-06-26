import Pizza from "../models/Pizza";
import { FC } from "react";
import SinglePizza from "../components/SinglePizza";

interface DisplayPizzaProps {
  pizzasList: Pizza[];
  updatePizza: (newPizza: Pizza) => void;
  deletePizza: (id: number) => void;
}

const DisplayPizza: FC<DisplayPizzaProps> = ({
  pizzasList,
  updatePizza,
  deletePizza,
}) => {
  return (
    <div className={"container"}>
      {pizzasList.map((pizza) => {
        return (
          <SinglePizza
            pizza={pizza}
            key={pizza.id}
            updatePizza={updatePizza}
            deletePizza={deletePizza}
          />
        );
      })}
    </div>
  );
};

export default DisplayPizza;
