import { useState, useEffect } from 'react'

import personsService from './services/persons'

import Filter from './components/Filter'
import Personform from './components/Personform'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')

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
      alert(`${newName} is already in the list`)
      setNewName('')
      return
    }

    const nameObject = {
      name: newName,
      phone: newPhone
    }

    personsService.createPerson(nameObject)
    .then(response => {
      setPersons(persons.concat(response))
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


  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
    <Filter value={filter} onChange={filterInput}/>
<br />
    <Personform formOnSubmit={addName} nameValue={newName} nameChange={addNameInput} phoneValue={newPhone} phoneChange={addPhoneInput}/>
      <h2>Numbers</h2>
    <Persons filterSearch={filteredPersons}/>
    </div>
  )
}

export default App