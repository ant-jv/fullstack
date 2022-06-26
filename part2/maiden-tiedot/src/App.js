import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'
import Countries from './components/Countries'

function App() {

  const [countries, setCountries] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    if (searchTerm !== '') {
      axios
        .get(`https://restcountries.com/v3.1/name/${searchTerm}`)
        .then(response => {
          setCountries(response.data)
        })
    } else {
      setCountries([])
    }
  }, [searchTerm])


  return (
    <div>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Countries countries={countries} setSearchTerm={setSearchTerm} />
    </div>
  )
}

export default App;
