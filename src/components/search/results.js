import React, { useState, useEffect } from "react";

const SearchResults = (props) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const generateResults = search => {
        console.log(`Now searching for ${search}...`)
        setIsLoading(false)
    };

    useEffect(() => {
        if (props.location.state.search){
            generateResults(props.location.state.search)
        }
      }, [props.location.state.search]);

    return isLoading ? (
        <p>Generating Search Results...</p>
      ) : (
      <p> {results.length} results found.</p>
      )
}

export default SearchResults;