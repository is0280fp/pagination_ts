import { useEffect, useState } from 'react';
import User from './type';
import Pagination from './Pagination';
import './App.css';

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
     const getUsers = async () => {
      await fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(users => setUsers(users))
    };
    getUsers();
  }, [])

  return (
    <div className="App">
      {/* why this has to be users */}
     <Pagination users={users}/>
    </div>
  );
}

export default App;
