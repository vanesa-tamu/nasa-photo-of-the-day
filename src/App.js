import React, {useEffect, useState} from "react";
import "./App.css";
import axios from 'axios'
// import Welcome from './Welcome.js'
import Cards from './Cards.js'

function App() {
  const [nasa, setNasa] = useState([])

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=2dYmiqXNAIT4hSBsaxX3FgUx6ndGHOXd3bNVk0MZ`)
      .then(data => {
        console.log("DATA", data)
        setNasa(data.data)
      })
      .catch(error => console.error('error in nasa', error))
  }, [])
  return (
    <div className="App">
      <Cards nasa={nasa}/>
    </div>
  );
}

export default App;
