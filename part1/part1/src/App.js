const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      Learning react with <a href='https://github.com/DavidBThomp/fullStackOpen'>DevBThom</a>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10
  const friends = [{name: 'Aman', age: 22}, {name: 'James', age: 23}]

  return (
  <>
      <h1>Greetings</h1>
      <Hello name='Maya' age={26 + 10} />
      <Hello name={name} age={age} />
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>

      <Footer />
    </>
  )
}

export default App