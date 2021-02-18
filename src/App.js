import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [location, setLocation] = useState('');

  useEffect(() => {
    axios.get('https://api.ipdata.co?api-key=dcb19aafdd3accd0ca61b014f91a6cc5888d57f4f703a9758da3751e')
      .then(res => {
        setLocation(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.error(err)
      })
  }, []);

  const url = 'https://www.google.com/maps/embed/v1/place?key=';
  const API_KEY = 'AIzaSyCdQymwSuF0P6Ee-ffX0ZtWjpJdpaT5eLk';
  const Q = '&q='
  const all = url + API_KEY + Q + location.city + ',' + location.country_name;

  return (
    <div className="App">
      <h1>{location.city}</h1>
      <h1>{location.country_name}</h1>
      <iframe className="iframe" src={all} />
    </div>
  );
}

export default App;
