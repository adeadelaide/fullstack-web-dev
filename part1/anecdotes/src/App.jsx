import { useState } from 'react'

const Header = ({ title }) => <h1 style={{marginLeft:10}}>{title}</h1>

const Button = ({ onClick, label }) => {
  return (
    <button onClick={onClick} style={{padding:10, margin:10}}>
      {label}
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [anec, setAnec] = useState(0)

  const nextAnecdote = () => {
    const randomAnecdote = Math.floor(Math.random() * anecdotes.length)
    setAnec(randomAnecdote)
  }

  const [favs, setfavs] = useState(new Array(anecdotes.length).fill(0))
  const voting = () => {
    const numberOfFavs = favs[anec]
    const newVote = [...favs]
    newVote[anec] = numberOfFavs + 1
    setfavs(newVote)
  }
  
  const favoriteAnecdote = () => {
    let topfavs = 0
    let topIndex = 0
    favs.forEach((vote, index) => {
      if (vote > topfavs) {
        topfavs = vote
        topIndex = index
      }
    })
    return [anecdotes[topIndex], topfavs]
  }


  return (
    <>
    <Header title='An anecdote a day, takes the pain away' />
    <div style={{height:70, marginBottom:5}}>
      <h3 style={{padding:10, marginLeft:20, marginRight:200}}>"{anecdotes[anec]}"</h3>

    </div>
    <p style={{marginLeft:10}}>This quote has {favs[anec]} votes.</p>

    <Button onClick={voting} label='Vote for this anecdote'/>
    <Button onClick={nextAnecdote} label='Next anecdote' />
   
    <Header title="People's favorite anecdote" />

    {/* Display the most voted anecdote and how many votes JUST if there are any votes, otherwise shows the "No favorite yet" empty state. */}
    {favs.some(vote => vote > 0)  ? (
      <>
        <h3 style={{padding:10, marginLeft:20, marginRight:200}}>The most loved anecdote, with {favoriteAnecdote()[1]} votes, is:</h3>
        <p style={{padding:10, marginLeft:20, marginRight:200}}>"{favoriteAnecdote()[0]}"</p>
      </>
    ) : (
      <p style={{marginLeft:10}}>No favorite yet. <b>Vote</b> your favorite anecdotes to see the most loved.</p>
    )}
    </>
  )
}

export default App
