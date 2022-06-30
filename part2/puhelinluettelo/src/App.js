import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Phonebook from './components/Phonebook'
import SearchField from './components/SearchField'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [notificationText, setNotificationText] = useState(null)
  const [notificationType, setNotificationType] = useState(null)

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
      <Notification text={notificationText} type={notificationType} />
      <PersonForm persons={persons} setPersons={setPersons} newName={newName} newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber} setNotificationText={setNotificationText} setNotificationType={setNotificationType} />

      <h2>Numbers</h2>
      <Phonebook persons={persons} setPersons={setPersons} searchTerm={searchTerm} setNotificationText={setNotificationText} setNotificationType={setNotificationType} />
    </div>
  )
}

export default App