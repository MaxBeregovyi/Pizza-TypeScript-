import React from "react";
import "./App.css";
import LearnTSSetTimeout from "./components/LearnTSSetTimeout";

let pizza: string = "Quarto formaggi";
let Striker: number = 3000;
let appleName: string[] = ["Loyalout", "New-Orlean", "Porter Grey"];
let numbers: number[] = [1, 2, 3, 4, 5];
let hasApple: boolean = false;
let myNumber: null | number = 300;
myNumber = 300;
//----------------

type logString = (title: string) => string;

const logString: logString = (title: string) => {
  return title;
};

//-------------------

type Order = {
  title: string;
  age?: number;
  color: string;
};
const myOrder: Order[] = [
  {
    title: "Loloro",
    color: "Green",
  },
  {
    title: "Ropfs",
    age: 33,
    color: "gold",
  },
];
const myObject: Order = { title: "Hello TypeScript", age: 120, color: "gold" };
//------------------------------------------
type Order1 = {
  age?: number;
  city: string;
  isDeveloper: boolean;
};

interface myOrder1 {
  age?: number;
  city: string;
  isDeveloper: boolean;
}

//-----------------Type розширяєм-------------------------

type A = {
  a: string;
  b: number;
};

type B = A & {
  c: string;
  d: boolean;
};
let myTs: B = {
  a: "Hi TS",
  b: 33,
  c: "WOW",
  d: true,
};

//--------------------Interface розширяєм---------------------------

interface Auto {
  color: string;
  country: string;
}

interface Tesla extends Auto {
  name: string;
  year: number;
  haveGasoline: boolean;
}

const tesla: Tesla = {
  name: "Tesla VXXX",
  color: "blue",
  country: "USA",
  year: 2027,
  haveGasoline: false,
};
console.log(tesla);

// type WV = Tesla & {
//   motor: string;
// };
// const vw: WV = {
//   name: "VW VXXX",
//   color: "blue",
//   country: "Germany",
//   year: 2027,
//   haveGasoline: false,
//   motor: "V10",
// };
// console.log(vw);

//-------------------------------------------------------------------
function App() {
  return (
    <div className="App">
      New App!
      <LearnTSSetTimeout pizza={pizza} />
      {pizza}
      {Striker}
      {"Hi"}
      <hr />
      {hasApple ? (
        <>
          {myObject.title}
          {myObject.color}
          {myObject.age}
        </>
      ) : (
        <>
          {myOrder.map((item, index) => (
            <div key={index}>
              <h2>{item.title}</h2>
              <h2>{item.color}</h2>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default App;
