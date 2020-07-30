import React, { useState, useEffect } from 'react';
import './App.css';
import userController from './controllers/User'
import { Link } from 'react-router-dom'

const user_Controller = new userController()

function App() {

  async function list() {
    user_Controller.fetch().then(res => {
      setUsers(res)
    }).catch(err => console.log(err.message))

  }

  useEffect(() => {
    list()
  }, [])

  const [users, setUsers] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  //console.log(users)
  const listAllUsers = users && users.map((user, index) => (

    <li key={index}>
      Nome: {user.name} Email: {user.email} <button><Link to={{
        pathname: "/edit",
        state: user
      }}>Editar</Link></button>
    </li>

  ))

  function newUser() {

    let user = {
      name,
      email,
    }

    user_Controller.create(user).then(() => {
      list()
    }).catch(err => console.log(err.message))
  }

  return (
    <div className="App">

      <div>

        <h2>Cadastro de úsuarios</h2>

        <input type="text" onChange={e => setName(e.target.value)} />
        <input type="email" onChange={e => setEmail(e.target.value)} />
        <button onClick={newUser} >Submit</button>

      </div>

      <ul>
        {listAllUsers}
      </ul>

    </div>
  );
}

export default App;
