const SearchField = ({searchTerm, setSearchTerm}) => {
    const handleSearch = (event) => {
        setSearchTerm(event.target.value)
    }
    return <div>Search: <input value={searchTerm} onChange={handleSearch} /></div>
}

export default SearchField