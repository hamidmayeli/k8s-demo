import './App.css';
import {useEffect, useState} from 'react';

// http://localhost:5212/api/WeatherForecast

function App() {
  const [state, setState] = useState([]);

  useEffect(() =>
  {
    fetch('/api/WeatherForecast')
    .then(data =>{
      data
      .json()
      .then(json =>{
        console.log({json});
        setState(json);
      });
    });
  }, []);
  
  return (
    <div className="App">
      <h1>
        The K8s Demo Client
      </h1>
      <p>
        <ul>
          {state.map(item =>(
            <li>
              {item.date} <strong>{item.temperatureC}</strong>({item.summary})
            </li>
          ))}
        </ul>
        </p>
    </div>
  );
}

export default App;
