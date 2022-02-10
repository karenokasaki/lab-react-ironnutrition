


function Search({ search, setSearch }) {

    function handleSearch(event) {
        setSearch(event.target.value)
    }

    return ( 
        <div>
            <input 
                type="text" 
                className="input search-bar" 
                name="search" 
                placeholder="Search" 
                value={search}
                onChange={handleSearch}
            />
        </div>
     );
}

export default Search;