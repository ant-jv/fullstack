import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  const voteArray = new Uint8Array(anecdotes.length); 
  const [selected, setSelected] = useState(0)
  const [votes, vote] = useState(voteArray)

  const addVote = (array, element) => {
    const copy = [...array];
    copy[element] += 1;
    return copy
  }

  return (
    <div>
      <AnecdoteOfTheDay anecdote={anecdotes[selected]} votes={votes[selected]} />
      <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>next anecdote</button>
      <button onClick={() => vote(addVote(votes,selected))}>vote</button>
      <MostVotes votes={votes} anecdotes={anecdotes} />
    </div>
  )
}

const AnecdoteOfTheDay = (props) => {
  return (
    <div>
      <h1>Anecdote Of The Day</h1>
      <p>
        {props.anecdote}
      </p>
      <p>Anecdote has {props.votes} votes.</p>
    </div>
  )
}

const MostVotes = (props) => {
  const max = Math.max(...props.votes);
  const maxId = props.votes.indexOf(max);
  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{props.anecdotes[maxId]}</p>
    </div>
  )
}

export default App