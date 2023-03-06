import { useState } from 'react'

const App = () => {
  // States
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '041-3103210321' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')


  // Event when user submits form
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
      name: newName,
      phone: newPhone
    }

    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewPhone('')
  }


  // Get User Input
  const addNameInput = (event) => {
    setNewName(event.target.value)
  }

  const addPhoneInput = (event) => {
    setNewPhone(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={addNameInput}/>
        </div>
        <div>
          Phone Number: <input type={'tel'} value={newPhone} onChange={addPhoneInput} />
          </div>
        <div>
          <button>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map((person, i) => {
          return(
            <p key={i}>{person.name} {person.phone}</p>
          )
        })}
    </div>
  )
}

export default App