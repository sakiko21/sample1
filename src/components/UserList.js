
import { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../App';
export default function UserList(){
    const language = useContext(LanguageContext);
    console.log({language});
    const [users, setUsers] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [loading, setLoading] = useState(true);
    function getUsers(){
        fetch('https://fakerapi.it/api/v1/users?_locale=' + language)
        .then(response => response.json())
        .then(json => setUsers(json))
        .finally(()=> setLoading(false));
    }
    useEffect(()=> {
        setLoading(true);
        getUsers();  
    }, [language])
    console.log(users)

return(
<div className="container">
<div className="header">
  <h2>Reactでデータを取り扱う方法</h2>
</div>
<div className="content">
  <ul>
    {users.data && users.data.map((user) => (
      <li key={users.id} className="user-card">
        <img src={user.image} alt={user.firstname} />
        <strong>{user.firstname} {user.lastname}</strong>
        <p>{user.email}</p>
      </li>
    ))
    }
  </ul>
</div>
<div className="pagination">
  {pageNumber > 1 && <button onClick={() => setPageNumber(pageNumber - 1)}>前へ </button>}
  <button onClick={() => setPageNumber(pageNumber + 1)}>次へ </button>
</div>
</div>
);
}