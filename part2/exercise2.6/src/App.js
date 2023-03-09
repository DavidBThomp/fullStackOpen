import { useState, useEffect } from 'react'

import personsService from './services/persons'

import './index.css'

import Filter from './components/Filter'
import Personform from './components/Personform'
import Persons from './components/Persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')
  const [successMessage, setSuccessMessage] = useState(null)

    const hook = () => {
      personsService.getPersons()
      .then(response => {
        setPersons(response)
      })
  }
  
  useEffect(hook, [])

  const addName = (event) => {
    event.preventDefault()

    const findSameName = persons.filter(person => person.name === newName)
    if(findSameName.length > 0) {
      if(window.confirm(`${newName} is already in the list, would you like to update the number?`)) {
        addNewNumber(findSameName)
        setNewName('')
        setNewPhone('')
      }
      setNewName('')
      return
    }

    const nameObject = {
      name: newName,
      phone: newPhone
    }

    personsService
    .createPerson(nameObject)
    .then(response => {
      setPersons(persons.concat(response))
      setSuccessMessage(`${newName} has been added...`)
      setTimeout(() => {
        setSuccessMessage(null)
      }, 5000)
    })

    setNewName('')
    setNewPhone('')
  }

  const addNameInput = (event) => {
    setNewName(event.target.value)
  }

  const addPhoneInput = (event) => {
    setNewPhone(event.target.value)
  }

  const filterInput = (event) => {
    setFilter(event.target.value)
  }

  const deletePerson = (id) => {
    const person = persons.find(p => p.id === id)
  
    if (window.confirm(`Delete ${person.name}?`)) {
      personsService
        .deletePerson(id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== id))
        })
        .catch(error => {
          console.log(`Error deleting person with id ${id}:`, error)
        })
    }
  }

  const addNewNumber = (findSameName) => {
    const userId = findSameName[0].id
    const findSameObject = persons.find(n => n.id === userId)

    const newPhoneInput = { ...findSameObject, phone: newPhone }

    personsService
    .updateNumber(userId, newPhoneInput)
    .then(response => {
      setPersons(persons.map(person => person.id !== userId ? person: response))
      setSuccessMessage(`${newName} has been updated...`)
      setTimeout(() => {
        setSuccessMessage(null)
      }, 5000)
    })
  }


  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={successMessage} />
    <Filter value={filter} onChange={filterInput}/>
<br />
    <Personform formOnSubmit={addName} nameValue={newName} nameChange={addNameInput} phoneValue={newPhone} phoneChange={addPhoneInput}/>
      <h2>Numbers</h2>
    <Persons filterSearch={filteredPersons} deletePerson={deletePerson}/>
    </div>
  )
}

export default App