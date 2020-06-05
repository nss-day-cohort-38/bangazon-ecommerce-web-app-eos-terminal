const remoteURL = "http://localhost:8000";

export default {
  get(id) {
    return fetch(`${remoteURL}/recommendedproducts/${id}`).then((result) =>
      result.json()
    );
  },
  getAll() {
    return fetch(`${remoteURL}/recommendedproducts`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${sessionStorage.getItem("bangazon-token")}`,
      },
    }).then((result) => result.json());
  },
  post(newRecommendation) {
    console.log(newRecommendation);
    return fetch(`${remoteURL}/recommendedproducts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Token ${sessionStorage.getItem("bangazon-token")}`,
      },
      body: JSON.stringify(newRecommendation),
    }).then((data) => data.json());
  },
  getAllCustomers() {
    return fetch(`${remoteURL}/customers`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${sessionStorage.getItem("bangazon-token")}`,
      },
    }).then((result) => result.json());
  },
};
