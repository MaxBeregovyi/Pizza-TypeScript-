import { FC, useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

import Pizza from "../models/Pizza";
import EditPizzaForm from "./EditPizzaForm";

interface SinglePizzaProps {
  pizza: Pizza;
  updatePizza: (newPizza: Pizza) => void;
  deletePizza: (id: number) => void;
}

const SinglePizza: FC<SinglePizzaProps> = ({
  pizza,
  updatePizza,
  deletePizza,
}) => {
  const [edit, setEdit] = useState<boolean>(false);

  const handleToggleEdit = () => {
    setEdit(() => !edit);
  };
  const handleDeletePizza = () => {
    deletePizza(pizza.id);
  };
  return (
    <div className={"pizza"}>
      <img src={`/images/${pizza.image}`} alt={pizza.namePizza} />
      <h2>{pizza.namePizza}</h2>
      <span>{pizza.price} $</span>
      <div className={"pizza-controls"}>
        <AiFillEdit onClick={handleToggleEdit} />
        {/*<AiFillEdit onClick={() => setEdit(!edit)} />*/}
        <AiFillDelete onClick={handleDeletePizza} />
        {/*<AiFillDelete onClick={() => deletePizza(pizza.id)} />*/}
      </div>

      {edit ? (
        <EditPizzaForm
          data={pizza}
          updatePizza={updatePizza}
          handleToggleEdit={() => setEdit(!edit)}
        />
      ) : null}
    </div>
  );
};

export default SinglePizza;
