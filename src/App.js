import './App.css';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Routing from './Routing/Routing';

function App() {

  const [accesstoken, setAccessToken] = useState("")


  useEffect(() => {
    const token = Cookies.get("jwt_token")
    setAccessToken(token)
  }, [])

  return (
    <div className="App">
      <Routing/>    
    </div>
  );
}

export default App;
