import { useState } from 'react'

// Credit to https://github.com/yeongjonglim/fullstackopen/blob/master/1/unicafe/src/index.js#L35 For a helping

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistic = ({text, value}) => (
  <tr>
  <td>{text}</td>
  <td>{value}</td>
  </tr>
)

const Stats = ({good, neutral, bad}) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
        <div>
            <h2>Statistics</h2>
            <p>No Feedback Provided</p>
        </div>
    )
  }

  const calculateTotal = () => good + neutral + bad

  const calculateAverage = () => {
    let total = calculateTotal();
    return ((good - bad)/total).toFixed(1);
  }

  const calculatePositive = () => {
    let total = calculateTotal();
    return (good/total*100).toFixed(1) + ' %';
  }

  return (
    <div>
        <h2>Statistics</h2>
        <table>
            <tbody>
                <Statistic text="Good" value={good} />
                <Statistic text="Neutral" value={neutral} />
                <Statistic text="Bad" value={bad} />
                <Statistic text="All" value={calculateTotal()} />
                <Statistic text="Average" value={calculateAverage()} />
                <Statistic text="Positive" value={calculatePositive()} />
            </tbody>
        </table>
    </div>
)
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () => setGood(good + 1);


  const neutralClick = () => setNeutral(neutral + 1);


  const badClick = () => setBad(bad + 1);


  return (
    <div>
      <h1>Give Feedback!</h1>
      <Button handleClick={goodClick} text='Good'/>
      <Button handleClick={neutralClick} text='Neutral'/>
      <Button handleClick={badClick} text='Bad'/>
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App