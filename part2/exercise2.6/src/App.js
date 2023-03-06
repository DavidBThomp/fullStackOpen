import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '041-3103210321' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')

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

    setPersons(persons.concat(nameObject))
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
      <div>
        filter names <input value={filter} onChange={filterInput} />
      </div>
<br />
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
        <h3>Numbers</h3>
      {filteredPersons.map((person, i) => {
        return(
          <p key={i}>{person.name} {person.phone}</p>
        )
      })}
    </div>
  )
}

export default App