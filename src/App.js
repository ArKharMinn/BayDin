import { useEffect, useState } from 'react';
import './App.css';
import { api } from './Api/Api';
import Home from './components/Home';

function App() {
  const [cookie, GetCookie] = useState([])
   const fetchData = async () => {
    const res = await api.get('/cookie')
     GetCookie(res.data)
   }
  
  useEffect(() => {
    fetchData();
  },[])
  return (
    <div className="App">
      <Home cookie={ cookie } />
    </div>
  );
}

export default App;
