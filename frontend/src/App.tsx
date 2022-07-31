import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState<{id: number, name: string}[]>([])

  useEffect(() => {
    fetch("/user").then(res => res.json()).then(data => setUser(data));
  }, [])
  
  return (
    <div className="App">
     {user.map((u) => {
      return <p>{u.name}</p>
     })}
    </div>
  );
}

export default App;
