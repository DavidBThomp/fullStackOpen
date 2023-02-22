const Header = (props) => {
  return(
  <div>
  <h1>{props.course}</h1>
  </div>
  )
}

const Part = (props) => {
  return (
  <>     
    <p>
      {props.part} {props.exercises}
    </p>
  </>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1[0].name} exercises={props.part1[0].exercises}/>
      <Part part={props.part1[1].name} exercises={props.part1[1].exercises}/>
      <Part part={props.part1[2].name} exercises={props.part1[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.part1[0].exercises + props.part1[1].exercises + props.part1[2].exercises}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content part1={parts} />
      <Total part1={parts}/>
    </div>
  )
}

export default App