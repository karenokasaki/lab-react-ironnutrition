import '../App.css'


function Search({ search, setSearch }) {

    function handleSearch(event) {
        setSearch(event.target.value)
    }

    return ( 
        <div>
            <input 
                type="text" 
                className="input is-rounded search-bar busca" 
                name="search" 
                placeholder="Search" 
                value={search}
                onChange={handleSearch}
            />
        </div>
     );
}

export default Search;