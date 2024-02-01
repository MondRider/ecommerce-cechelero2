import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [stock, setStock] = useState(0);

  return (
    <div className="App">
     <Navbar/>
     <ItemListContainer greeting={'Bem vindo'} />
     <ItemCount stock={15} count={count} setCount={setCount} />
    </div>
  );
}


function ItemCount({ stock, count, setCount }) {
  function handleAdd() {
    if (count < stock) setCount(count + 1);
  }

  function handleRemove() {
    if (count > 0) setCount(count - 1);
  }

  return (
    <main>
      <button onClick={handleRemove}>-</button>
      <p>{count}</p>
      <button onClick={handleAdd}>+</button>
    </main>
  );
}

export default App;
