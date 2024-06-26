import "./styles.css";
import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import Pizza from "../models/Pizza";

interface AddPizzaFormProps {
  addPizza: (newPizza: Pizza) => void;
}

const initialState = {
  namePizza: "",
  price: "",
  image: "",
};

const AddPizzaForm: FC<AddPizzaFormProps> = ({ addPizza }) => {
  const [newPizza, setNewPizza] = useState<{
    namePizza: string;
    price: string;
    image: string;
  }>(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewPizza({
      ...newPizza,
      [name]: [value],
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { namePizza, price, image } = newPizza;
    if (namePizza && price && image) {
      addPizza({ namePizza, image, price: Number(price), id: Date.now() });
    }

    setNewPizza(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={newPizza.namePizza}
        onChange={handleChange}
        type="text"
        name={"namePizza"}
        placeholder={"Pizza Name"}
      />
      <input
        value={newPizza.price}
        onChange={handleChange}
        type="text"
        name={"price"}
        placeholder={"Price"}
      />{" "}
      <input
        value={newPizza.image}
        onChange={handleChange}
        type="text"
        name={"image"}
        placeholder={"pizza-1.jpg - pizza-6.jpg"}
      />
      <button type={"submit"}>Додати в меню +</button>
    </form>
  );
};

export default AddPizzaForm;
