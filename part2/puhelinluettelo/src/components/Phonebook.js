import personService from '../services/persons'

const Phonebook = ({persons, setPersons, searchTerm, setNotificationText, setNotificationType}) => {

    const removePerson = (id, name) => {
      if (window.confirm(`Remove ${name}?`)) {
            personService
            .removePerson(id)
            .then(() => {
                setPersons(persons.filter(person => person.id !== id))
                setNotificationText(`Removed ${name}`)
                setNotificationType("success")
                setTimeout(() => {
                    setNotificationText(null)
                    setNotificationType(null)
                }, 5000)
            })
        }
    }

    let filtered = persons.filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase()))
    
    return (
        <div>
        { filtered.map(person =>
            <div key={person.name} >{person.name} {person.number} <button onClick={() => removePerson(person.id, person.name)}>Delete</button></div>
        ) }
        </div>
    )
}

export default Phonebook