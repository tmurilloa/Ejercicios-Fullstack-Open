import { useState } from 'react'

const Filter = ({type,value,onChange}) => {
  return (
    <div>
        filter shown with  <input type={type} value={value} onChange={onChange} />
    </div>
  )
}

const PersonForm = ({onSubmit, objectName, objectNumber}) => {
  return(
    <form onSubmit={onSubmit}>
        <div>
          name: <input type={objectName.type} value={objectName.value} onChange={objectName.onChange}/>
        </div>
        <div>
          number: <input type={objectNumber.type} value={objectNumber.value} onChange={objectNumber.onChange}/>
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
    </form>
  )
}

const Persons = ({Personas}) => {
  return(
    <>
    {Personas.map((persona) => <p key={persona.id}>{persona.name} {persona.number}</p>)}
    </>
  )
}

function App() {
  const [personas, setPersonas] = useState([
    {name: 'Arto Hellas', number: 3168227258, id: 1},
    {name: 'Tomas Murillo', number: 123, id: 2},
    {name: 'Ada Lovelace', number: 987, id: 3}
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter,  setFilter] = useState('')
  const filterPersonas = filter === ''  ? 
  personas 
  :personas.filter((persona) => persona.name.toLowerCase().includes(filter.toLowerCase()))

  const addPersona = (event) =>{
    event.preventDefault()
    const persona = {name: newName, number: newNumber, id: personas.length + 1}

    const ExistePersona = personas.some(personaAux => personaAux.name === persona.name)
    if (ExistePersona){
      alert(`${persona.name} is already added to phonebook`)
    }
    else{
      setPersonas(personas.concat(persona))
    }
    setNewName('')
    setNewNumber('')
    
  }
 
  const handleFilter = (event) => {
    setFilter(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(Number(event.target.value))
  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter type={'text'} value={filter} onChange={handleFilter}/>
      <h3>add a new</h3>
      <PersonForm onSubmit={addPersona} 
      objectName={{type: 'text', value: newName, onChange: handleNameChange}}
      objectNumber={{type: 'number', value: newNumber, onChange: handleNumberChange}}
      />
      <h3>Numbers</h3>
      <Persons Personas={filterPersonas}/>
    </div>
  )
}

export default App
