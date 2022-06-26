import Weather from './Weather'

const Countries = (props) => {
    if (1 < props.countries.length && props.countries.length < 11) {
        return (
            <div>
                {props.countries.map(country => <PrintCountry key={country.ccn3} name={country.name.common} setSearchTerm={props.setSearchTerm} />)}
            </div>
        )
    } else if (1 === props.countries.length) {

        let languages = Object.values(props.countries[0].languages)
        return (
            <div>
                <h1>{props.countries[0].name.common}</h1>
                <p>
                    capital: {props.countries[0].capital}<br />
                    area: {props.countries[0].area}
                </p>
                languages:
                    <ul>
                        {languages.map(language => <li key={language}>{language}</li>)}
                    </ul>
                <img src={props.countries[0].flags['png']} alt={props.countries[0].name.common} />
                <h2>Weather in {props.countries[0].capital}</h2>
                <Weather lat={props.countries[0].capitalInfo.latlng[0]} lon={props.countries[0].capitalInfo.latlng[1]} />
            </div>
        )
    } else if (props.countries.length > 10) {
        return "Narrow down your search."
    }
}

const PrintCountry = ({name, setSearchTerm}) => {
    const setCountry = (event) => {
        setSearchTerm(name)
    }
    return (
        <div>
            {name} <button onClick={setCountry}>Show</button>
        </div>
    )
}

export default Countries