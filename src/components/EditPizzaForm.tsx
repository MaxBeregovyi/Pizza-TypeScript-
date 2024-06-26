import "./styles.css";
import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import Pizza from "../models/Pizza";

interface EditPizzaFormProps {
  data: Pizza;
  updatePizza: (newPizza: Pizza) => void;
  handleToggleEdit: () => void;
}

const EditPizzaForm: FC<EditPizzaFormProps> = ({
  data,
  updatePizza,
  handleToggleEdit,
}) => {
  const [editPizza, setEditPizza] = useState<Pizza>(data);
  console.log(data);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditPizza({
      ...editPizza,
      [name]: [value],
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { namePizza, price, image } = editPizza;
    if (namePizza && price && image) {
      updatePizza(editPizza);
      handleToggleEdit();
    }
  };

  return (
    <form className={"edit-form"} onSubmit={handleSubmit}>
      <input
        value={editPizza.namePizza}
        onChange={handleChange}
        type="text"
        name={"namePizza"}
        placeholder={"Pizza Name"}
      />
      <input
        value={editPizza.price}
        onChange={handleChange}
        type="text"
        name={"price"}
        placeholder={"Price"}
      />{" "}
      <input
        value={editPizza.image}
        onChange={handleChange}
        type="text"
        name={"image"}
        placeholder={"Image"}
      />
      <button type={"submit"}>Підтвердити</button>
    </form>
  );
};

export default EditPizzaForm;
