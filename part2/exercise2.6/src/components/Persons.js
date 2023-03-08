import Person from './Person'

const Persons = ({ filterSearch, deletePerson }) => {
  return (
    <div>
      {filterSearch.map(person => (
        <Person key={person.id} person={person} deletePerson={() => deletePerson(person.id)} />
      ))}
    </div>
  )
}

export default Persons