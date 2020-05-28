const productsApiUrl = "http://localhost:8000/products";

const SearchManager = {
    getAllProducts() {
        return fetch(productsApiUrl, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${sessionStorage.getItem("bangazon-token")}`
            }
        })
        .then(resp => resp.json())
    }
}

export default SearchManager;