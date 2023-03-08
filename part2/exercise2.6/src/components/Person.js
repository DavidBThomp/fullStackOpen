const Person = ({ person, deletePerson }) => {
    return (
      <div>
        {person.name} {person.phone} <button onClick={deletePerson}>delete</button>
      </div>
    )
  }

export default Person