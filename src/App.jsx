import React, { useState } from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <NavBar contador={contador} />
      <ItemListContainer
        greeting="¡Descubre la magia del verano con Vallstore!"
        setContador={setContador}
        contador={contador}
      />
    </div>
  );
}

export default App;
