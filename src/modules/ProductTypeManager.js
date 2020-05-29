const remoteURL = "http://localhost:8000"

export default {
    getAll() {
        return fetch(`${remoteURL}/producttypes`).then(result => result.json())
    },
    getProductTypeById(productTypeId) {
        return fetch(`${remoteURL}/producttypes/${productTypeId}`)
            .then(resp => resp.json())
      }

}