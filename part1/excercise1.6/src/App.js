import { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Stats = (props) => {
  if (props.total === 0) {
    return (
      <p>
      </p>
    )
  }
  return (
  <p>
    {props.text}: {props.value}
  </p>
  )
}

const StatsHeader = (props) => {
  if (props.total === 0) {
  return (
    <h2>No User Input</h2>
  )
  }
  return (
    <h2>Stats</h2>
  )
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const goodClick = () => {
    setGood(good + 1);
    setTotal(total + 1)
  }

  const neutralClick = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1)
  }

  const badClick = () => {
    setBad(bad + 1);
    setTotal(total + 1)
  }


  return (
    <div>
      <h1>Give Feedback!</h1>
      <Button handleClick={goodClick} text='Good'/>
      <Button handleClick={neutralClick} text='Neutral'/>
      <Button handleClick={badClick} text='Bad'/>
      <StatsHeader total={total}/>
      <Stats value={good} text='Good' total={total} />
      <Stats value={neutral} text='Neutral' total={total} />
      <Stats value={bad} text='Bad' total={total} />
      <Stats value={total} text='Total' total={total}/>
      <Stats value={(good - bad) / (good + bad + neutral)} text='Average' total={total} />
      <Stats value={(good / (good + bad + neutral))*100} text='Positive' total={total} />
    </div>
  )
}

export default App