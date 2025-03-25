import { useState } from 'react'

const AnecdoteMostVotes= (props) => {
  return (
    <>
      <h1>Anecdote with most votes</h1>
      <p>{props.ImostVotes}</p>
    </>
  )
}
function App() {
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
  const lengthAnecdotes = anecdotes.length
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(lengthAnecdotes).fill(0))
  const [Imax, setImax] = useState(0)

  // Maneja la seleccion aleatoria de una anecdota cuando es pulsado el boton "Next anecdote"
  const handleNextAnecdote = () => {
    const randomAnecdote = Math.floor(Math.random() * lengthAnecdotes)
    setSelected(randomAnecdote)
  }
  // funcion que permite encontrar el indice del maximo numero en una array 
  const Max = (Array) => {
    let maxElement = 0
    for (let i = 1; Array.length > i; i++){
      if (Array[i] > Array[maxElement]){
        maxElement = i
      }
    }
    return(maxElement)
  }
  
  // Maneja los votos y actualiza la anecdota que tenga mas votos cuando se pulse el boton
  // "Vote"
  const handleVotesButton = () => {
    // Copia el array de los votos y actualiza la cuenta de la anectoda seleccionada
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)

    // Actualiza y calcula la anecdota que mas votos tenga
    const MaxVotes = Max(copy)
    setImax(MaxVotes)
  }

  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p> 
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVotesButton}>vote</button>
      <button onClick={handleNextAnecdote}>
        next anecdote
      </button>
      <AnecdoteMostVotes ImostVotes={anecdotes[Imax]}/>
    </>
  )
}

export default App
