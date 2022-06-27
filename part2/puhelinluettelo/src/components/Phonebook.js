import personService from '../services/persons'

const Phonebook = ({persons, setPersons, searchTerm}) => {

    const removePerson = (id, name) => {
        const persoonat = [
              { 
                "name": "Arto Hellas", 
                "number": "040-123456",
                "id": 1
              },
              { 
                "name": "Ada Lovelace", 
                "number": "39-44-5323523",
                "id": 2
              },
              { 
                "name": "Dan Abramov", 
                "number": "12-43-234345",
                "id": 3
              },
              { 
                "name": "Mary Poppendieck", 
                "number": "39-23-6423122",
                "id": 4
              }
            ]

        if (window.confirm(`Remove ${name}?`)) {
            personService
            .removePerson(id)
            .then(removedPerson => {
                console.log(removedPerson)
                setPersons(persons.filter(person => person.id !== id))
            })
        }
    }

    console.log("jojoi",persons)
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