import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import oval from './oval.svg'

const App = () => {
  
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(true);
  const [fetching, setFetching] = useState(false);

  useEffect(()=> {
    const fetchData = async () => {
      setLoading(true);
      const result = await axios("https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/type/general")
      setJoke(`${result.data[0].setup} ${result.data[0].punchline}`);
      setLoading(false);
    }
    fetchData();
  },[fetching])
  return (
    <div className="App box">
      <h1>Random Jokes App</h1>
      {loading ? (
        <img className={{ margin: 40 }} src={oval} alt="loader" />
      ) : (
        <h1>{joke}</h1>
      )}
     
      <p onClick={()=> setFetching(!fetching)}>Another One</p>
    </div>
  );
}

export default App;
