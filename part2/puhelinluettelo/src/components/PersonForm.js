const PersonForm = ({persons, newName, newNumber, setNewName, setNewNumber, setPersons}) => {

    const addName = (event) => {
        event.preventDefault()
        if (!alreadyExists(persons, newName)) {
            setPersons(persons.concat({"name": newName, "number": newNumber}))
            setNewName('')
            setNewNumber('')
        }else{
            alert(`${newName} is already added to phonebook`)
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