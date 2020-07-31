import React, { useState } from 'react';
import userController from '../../controllers/User'
import { Redirect } from 'react-router-dom';

const user_Controller = new userController()

function Edit({ location }) {

    const { name, email, id } = location.state

    const [newname, setNewName] = useState('')
    const [newemail, setNewEmail] = useState('')
    const [redirect, setRedirect] = useState(false)

    /* EDITA ÚSUARIO */

    function Editar() {

      let user = {
        name: newname,
        email: newemail,
      }

      user_Controller.update(id, user).then(() => {
        setRedirect(true)
      }).catch(err => console.log(err.message))
    }

    /* DELETA ÚSUARIO */

    function Delete() {
      user_Controller.delete(id).then(() => {
        setRedirect(true)
      }).catch(err => console.log(err.message))
    }

    function Cancel() {setRedirect(true)}

    return (
      <div className="App">

        <div>

          <h2>Editar úsuario</h2>

          <input type="text" value={newname ? newname : name} onChange={e => setNewName(e.target.value)} />
          {' '}
          <input type="email" value={newemail ? newemail : email} onChange={e => setNewEmail(e.target.value)} />
          {' '}
          <button onClick={Cancel}>Cancelar</button>{' '}
          <button onClick={Editar} >Salvar</button>{' '}
          <button onClick={Delete} >Deletar</button>{' '}

        </div>

        {
          redirect && <Redirect to="/" />
        }
      </div>
    );
}

export default Edit;
