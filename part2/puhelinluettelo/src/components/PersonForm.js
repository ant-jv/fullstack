import personService from '../services/persons'

const PersonForm = ({persons, newName, newNumber, setNewName, setNewNumber, setPersons}) => {

    const addName = (event) => {
        event.preventDefault()
        if (!alreadyExists(persons, newName)) {
            const newPersonObject = {"name": newName, "number": newNumber}
            setPersons(persons.concat(newPersonObject))
            setNewName('')
            setNewNumber('')

            personService
            .create(newPersonObject)
            .then(newPersonData => {
              console.log(newPersonData)
            })

        }else{

            if (window.confirm(`Update number for ${newName}?`)) {

                const person = persons.find(person => person.name == newName)
                personService
                .updateNumber(person.id, person.name, newNumber)
                .then(updatedPerson => {
                    console.log("Onnistuin", updatedPerson)
                    setPersons(persons.filter(p => p.id !== person.id).concat([updatedPerson]))
                    setNewName('')
                    setNewNumber('')
                })
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