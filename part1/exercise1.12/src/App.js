import { useState } from 'react' 

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]


  // Random Number between 0-7
  const randomNumber = () => Math.floor(Math.random()*(anecdotes.length))

  // New States
  const [selected, setSelected] = useState(() => randomNumber())
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const mostVotes = () => {
    let mostQuote = '';
    let mostVotes = 0;
    // Loops through votes for highest amount
    for (let i = 0; i < anecdotes.length; i++) {
      if(votes[i] > mostVotes) {
        mostQuote = anecdotes[i];
        mostVotes = votes[i];
      }
    }
    // Returns the quote and amount of votes
    return {mostQuote, mostVotes};
  }

  return (
    <div>
      {anecdotes[selected]}
      <br></br>
      Votes: {votes[selected]}
      <br></br>
      <button onClick={() => setSelected(randomNumber())}>Next Quote</button>
      <button onClick={() => {
        // Creates a new array, which is then a new array (votes)
          const newVotes = [...votes];
          newVotes[selected] += 1;
          setVotes(newVotes);
        }}>Vote</button>
        <h2>Most votes:</h2>
        <p>{mostVotes().mostQuote}</p>
        votes: {mostVotes().mostVotes}
    </div>
  )
}

export default App