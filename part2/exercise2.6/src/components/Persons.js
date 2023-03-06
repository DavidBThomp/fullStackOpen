const Persons = ({filterSearch}) => { return (
<>
    {filterSearch.map((person, i) => {
        return (
          <p key={i}>{person.name} {person.phone}</p>
        )
      })}
      </>
)
}

export default Persons