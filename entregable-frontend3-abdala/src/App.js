import { useState } from "react";
import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado";

function App() {

  const [purchaseItems, setPurchaseItems] = useState(0)
  const addItem = () => setPurchaseItems(purchaseItems+1)

  return (
    <div className="App">
      <Cabecera purchaseItems = {purchaseItems}/>
      <Listado addItem = {() => addItem()}/>
    </div>
  );
}

export default App;
