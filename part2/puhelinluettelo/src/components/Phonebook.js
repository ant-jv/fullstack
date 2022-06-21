const Phonebook = ({persons, searchTerm}) => {
    let filtered = persons.filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase()))
    return (
        <div>
        { filtered.map(person => <PhonebookItem key={person.name} name={person.name} number={person.number} />) }
        </div>
    )
}

const PhonebookItem = (props) => {
    return <div>{props.name} {props.number}</div>
}

export default Phonebook