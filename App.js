import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import DisplayData from './components/DisplayData'


function App() {
  const [items, setItems] = useState([]);

  const getJoke = async () => {
    const res = await axios.get('https://randomuser.me/api')

    console.log(res.data.results)
    setItems(res.data.results)
  }


  return (
    <div>
      <button onClick={getJoke}>Click</button>
      <DisplayData items={items} />
    </div>
  );
}

export default App;
