import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import { Table, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import userController from './controllers/User'

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

    /* LISTA ÚSUARIOS */

    const listAllUsers = users && users.map((user, index) => (

      
      <tr key={index}>
        <td>{user.name}</td>
        <td>{user.email} </td>
        <td><Button variant="link"><Link to={{ pathname: "/edit", state: user }}>Editar</Link></Button></td>
      </tr>
      

    ))

    /* CRIA ÚSUARIO */

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

          <input type="text" placeholder="Nome" onChange={e => setName(e.target.value)} />
          <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
          <button onClick={newUser} >Enviar</button>

        </div>

        

        <Table  bordered hover striped size="sm">
          <thead>

            <tr>
              <td>Nomes</td>
              <td>Email</td>
              <td>Edit</td>
            </tr>

          </thead>
          <tbody>
            {listAllUsers}
          </tbody>
        </Table>

      </div>
    );
}

export default App;
