import { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Stats = (props) => {
  console.log(props)
  if (isNaN(props.value)) {
    return (
      <p>
        {props.text}: 0
      </p>
    )
  }
  return (
  <p>
    {props.text}: {props.value}
  </p>
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
      <h2>Stats</h2>
      <Stats value={good} text='Good'/>
      <Stats value={neutral} text='Neutral'/>
      <Stats value={bad} text='Bad'/>
      <Stats value={total} text='Total' />
      <Stats value={(good - bad) / (good + bad + neutral)} text='Average' />
      <Stats value={(good / (good + bad + neutral))*100} text='Positive'/>





      {/* <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bood: {bad}</p> 
      <p>All: {total}</p>
     <p>Average: {(good - bad) / (good + bad + neutral)}</p>
      <p>Positive: {(good / (good + bad + neutral))*100}%</p>
      */}
    </div>
  )
}

export default App