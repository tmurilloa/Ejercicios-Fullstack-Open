import { useState, useEffect } from 'react'
import personService from './services/persons'

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
const DeleteButton = ({persona, setPersonas, personas}) => {
  const handlerDeleteButton = (id) =>{
    if (window.confirm(`Do you want to delete ${persona.name}`)){
      personService.deletePerson(id)
      .then((personReturned) => {
        setPersonas(personas
            .filter(person => person.id !== personReturned.id))
      })
    }
  }
  return(
    <button onClick={() => handlerDeleteButton(persona.id)}>delete</button>
  )
}

const Persons = ({Personas, setPersonas}) => {
  return(
    <>
    {Personas.map((persona) => <p key={persona.id}>{persona.name} {persona.number} <DeleteButton persona={persona} setPersonas={setPersonas} personas={Personas}/></p>)}
    </>
  )
}

function App() {
  // Definiciones de State Hooks y variables
  const [personas, setPersonas] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter,  setFilter] = useState('')
  const filterPersonas = filter === ''  ? 
  personas 
  :personas.filter((persona) => persona.name.toLowerCase().includes(filter.toLowerCase()))

  const handlerUpdateInfo= (persona) =>{
    console.log(persona);
    if(window.confirm(`${persona.name} is already added to phonebook, replace the older number with a new one?`)){
      personService.updateInfo({...persona, number: newNumber})
        .then((personReturned) => {
          setPersonas(
            personas.map(personaAux => personaAux.id !== persona.id ? personaAux : personReturned)
          )
        })
    }
  }
  // funcion que nos permite anadir una persona, asegurandose que nos exista antes
  const addPersona = (event) =>{
    event.preventDefault()
    const persona = {
      name: newName, 
      number: newNumber, 
      id: `${personas.length + 1}`}

    const ExistePersona = personas.some(personaAux => personaAux.name === persona.name)
    if (ExistePersona){
      const personaAux = personas.find(
        (personaFun) => personaFun.name === persona.name
      )
      handlerUpdateInfo(personaAux)
    }
    else{
      personService.create(persona)
        .then((personReturned) => {
          setPersonas(personas.concat(personReturned))
        })
    }
    setNewName('')
    setNewNumber('')
  }
  
  // Handlers para manejar el cambio en los inputs 
  const handleFilter = (event) => {
    setFilter(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(Number(event.target.value))
  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  // Hook efect para traer los datos establecidos en la bd de db.json/persons
  const hook = () => {
    personService.getAll()
      .then((initialPersonas => setPersonas(initialPersonas)))
  }
  useEffect(hook, [])


  // Lo que se muestra en la aplicacion
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
      <Persons Personas={filterPersonas} setPersonas={setPersonas}/>
    </div>
  )
}

export default App
