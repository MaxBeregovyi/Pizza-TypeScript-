import React, { useEffect, useState } from "react";

function LearnTSSetTimeout({ pizza }) {
  const [pizzaState, setPizzaState] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPizzaState(true);
    }, 2000);
  }, []);

  return (
    <div>
      <h2>Road Map</h2>
      {pizzaState && <h2 style={{ color: "gold" }}>{pizza}</h2>}
    </div>
  );
}

export default LearnTSSetTimeout;
