import { useState } from 'react'
import PersonForm from './components/PersonForm'
import Phonebook from './components/Phonebook'
import SearchField from './components/SearchField'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchField searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <h3>Add A New</h3>
      <PersonForm persons={persons} setPersons={setPersons} newName={newName} newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber} />

      <h2>Numbers</h2>
      <Phonebook persons={persons} searchTerm={searchTerm}/>
    </div>
  )
}

export default App