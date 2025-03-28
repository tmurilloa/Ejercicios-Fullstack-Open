import { useState } from 'react'

function App() {
  const [personas, setPersonas] = useState([{name: 'Arto Hellas'}])

  const [newName, setNewName] = useState('')

  const addPersonas = (event) =>{
    event.preventDefault()
    const persona = {name: newName}

    const ExistePersona = personas.some(personaAux => personaAux.name === persona.name)
    
    if (ExistePersona){
      alert(`${persona.name} is already added to phonebook`)
    }
    else{
      setPersonas(personas.concat(persona))
    }
    setNewName('')
    
  }
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPersonas}>
        <div>
          name: <input type="text" value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {personas.map((persona) => <p key={persona.name}>{persona.name}</p>)}
    </div>
  )
}

export default App
