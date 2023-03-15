const Person = ({ person, deletePerson }) => {
  console.log(person);
    return (
      <div>
        {person.name} {person.phone} <button onClick={deletePerson}>delete</button>
      </div>
    )
  }

export default Person