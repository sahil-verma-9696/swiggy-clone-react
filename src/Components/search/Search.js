function Search() {
    return <div className="search-component size-full w-4/5">
        <div className="wrapper w-full">
            <div className="inp-wrapper ">
                <input className="w-full" type="text" placeholder="Search for restaurants and food" />
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    </div>
}

export default Search;