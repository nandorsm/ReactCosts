
import {useEffect, useState} from 'react'

function ChuckNorris(){

    const [joke, setJoke] = useState("jokes here");

    useEffect(() => {
        getJoke();
    }, []);

    const getJoke = async () => {
        const response = await fetch("https://api.chucknorris.io/jokes/random", {
            headers: {
            Accept: "application/json",
            },
        });
        const data = await response.json();
        setJoke(data.value);
    };


    return (
        <div className="container">
          <h1>Don't laugh challenge</h1>
          <p className="joke">{joke}</p>
          <button type="button" className="btn" onClick={getJoke}>
            Get Another Joke
          </button>
        </div>
      );
}

export default ChuckNorris