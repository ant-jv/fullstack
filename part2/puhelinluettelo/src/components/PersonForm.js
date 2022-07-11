import personService from '../services/persons'

const PersonForm = ({persons, newName, newNumber, setNewName, setNewNumber, setPersons, setNotificationText, setNotificationType}) => {

    const addName = (event) => {
        event.preventDefault()
        if (!alreadyExists(persons, newName)) {
            const newPersonObject = {"name": newName, "number": newNumber}
            personService
            .create(newPersonObject)
            .then(newPersonData => {
                console.log("testi")
                setPersons(persons.concat(newPersonData))
                setNewName('')
                setNewNumber('')
                setNotificationText(`Added ${newName}`)
                setNotificationType("success")
                setTimeout(() => {
                    setNotificationText(null)
                    setNotificationType(null)
                }, 5000)
            })
            .catch(error => {
                console.log("VIRHE:", error.response.data.error)
                
                setNotificationText(error.response.data.error)
                setNotificationType("error")
                setTimeout(() => {
                    setNotificationText(null)
                    setNotificationType(null)
                }, 5000)
                
            })

        }else{

            if (window.confirm(`Update number for ${newName}?`)) {

                const person = persons.find(person => person.name == newName)
                personService
                .updateNumber(person.id, person.name, newNumber)
                .then(updatedPerson => {
                    setPersons(persons.filter(p => p.id !== person.id).concat([updatedPerson]))
                    setNewNumber('')
                    setNewName('')
                    setNotificationText(`Updated ${person.name}`)
                    setNotificationType("success")
                    setTimeout(() => {
                        setNotificationText(null)
                        setNotificationType(null)
                    }, 5000)
                }, error => {
                        setNotificationText(`${person.name} is already removed from server`)
                        setNotificationType("error")
                        setTimeout(() => {
                            setNotificationText(null)
                            setNotificationType(null)
                        }, 5000)
                    }
                )
            }
        }
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const alreadyExists = (persons, newName) => {
        const exists = (element) => element.name === newName
        return persons.some(exists)
    }    

    return (
        <form onSubmit={addName}>
        <div>
        Name: <input
            value={newName}
            onChange={handleNameChange}
        /><br />
        Number: <input
            value={newNumber}
            onChange={handleNumberChange}
        />
        </div>
        <div>
        <button type="submit">add</button>
        </div>
        </form>
    )
}

export default PersonForm