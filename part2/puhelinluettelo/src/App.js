import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Phonebook from './components/Phonebook'
import SearchField from './components/SearchField'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(personsData => {
        setPersons(personsData)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchField searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <h3>Add A New</h3>
      <PersonForm persons={persons} setPersons={setPersons} newName={newName} newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber} />

      <h2>Numbers</h2>
      <Phonebook persons={persons} setPersons={setPersons} searchTerm={searchTerm} />
    </div>
  )
}

export default App