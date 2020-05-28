import React, { useState, useEffect } from "react";
import SearchManager from '../../modules/SearchManager';
import "./Results.css"

const SearchResults = (props) => {
  const [results, setResults] = useState([]);
  const [local, setLocal] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const generateResults = search => {
    setIsLoading(true)
    SearchManager.getAllProducts()
      .then(allProducts => {
        const matchProducts = allProducts.filter(
          product => product.title.toUpperCase().includes(search.toUpperCase())
        );
        const localProducts = allProducts.filter(
          product => product.location).filter(product => product.location.toUpperCase().includes(search.toUpperCase())
          );
        setResults(matchProducts);
        setLocal(localProducts);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (props.location.state.search) {
      generateResults(props.location.state.search)
    }
  }, [props.location.state.search]);

  return isLoading ? (
    <p>Generating Search Results...</p>
  ) : (
      <>
        <h3>{results.length} product(s) found matching your search</h3>
        {results.map(result => (
          <strong><li onClick={() => props.history.push(`/products/${result.id}`)} key={result.id}>{result.title}</li></strong>
        ))}

        <h3>{local.length} product(s) found with location matching your search</h3>
        
        {local.map(result => (
          <strong><li onClick={() => props.history.push(`/products/${result.id}`)} key={result.id}>{result.title}</li></strong>
        ))}
      </>
    )
}

export default SearchResults;