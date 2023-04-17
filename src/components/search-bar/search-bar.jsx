import { useState } from "react"
import { useCallback } from "react"
import { useId } from "react"

const SearchBar = ( { label, onSearch } ) => {

    const [query, setQuery] = useState('')

    const id = useId()

    const handleSearchSubmit = useCallback((e) => {
        e.preventDefault();

        // console.log('search-bar - query : ', query);
        onSearch(query);
        setQuery('');
    }, [query])

    return (
        <form onSubmit={handleSearchSubmit}>
            {label && (
                <label htmlFor={id + 'search'}>{label}</label>
            )}

            <input type="text" id={id + 'search'}
            value={query} onChange={(e) => setQuery(e.target.value)} />

            <button type="submit">Rechercher</button>
        </form>
    )
}

SearchBar.defaultProps = {
    onSearch:() => {}
}

export default SearchBar