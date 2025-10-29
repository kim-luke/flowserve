import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [backEndData, setBackEndData] = useState(null);

  const callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  useEffect(() => {
    callBackendAPI()
      .then(res => setBackEndData(res.express))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        Pokemon Finder
      </header>
    </div>
  );
}

export default App;