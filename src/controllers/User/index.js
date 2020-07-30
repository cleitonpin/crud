import React from 'react'
import firebase from '../../configs/firebase'

const firestore = firebase.firestore()
// ei ei ei quem bota muito espaço é top !!gay
export default class UserController {



  create = async (user) => {
    try {
      let users = await firestore.collection('Users').doc()
      users.set({
        id: users.id,
        name: user.name,
        email: user.email
      })


    } catch (err) {
      return Promise.reject(err)
    }
  }

  delete = async (id) => {
    try {

      let users = await firestore.collection('Users').where('id', '==', id)

      users.delete()

    } catch (err) {
      return Promise.reject(err)
    }
  }

  update = async (id, user) => {
    try {

      let users = await firestore.collection('Users').where('id', '==', id).get()
      users.forEach(res => res.ref.update(user))

    } catch (err) {
      return Promise.reject(err)
    }
  }

  fetch = async () => {
    try {

      let response = [];
      let users = await firestore.collection('Users').get()
      users.forEach(data => response.push(data.data()))

      console.log(response)
      return response

    } catch (err) {
      return Promise.reject(err)
    }
  }

}
