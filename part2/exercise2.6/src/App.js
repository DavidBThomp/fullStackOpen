import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()

    // Find if user is in database and alert and return nothing if so
    const findSameName = persons.filter(person => person.name === newName)
    if(findSameName.length > 0) {
      alert(`${newName} is already in the list`)
      setNewName('')
      return
    }

    const nameObject = {
      name: newName
    }

    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  const addNameInput = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={addNameInput}/>
        </div>
        <div>
          <button>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map((person, i) => {
          return(
            <p key={i}>{person.name}</p>
          )
        })}
    </div>
  )
}

export default App