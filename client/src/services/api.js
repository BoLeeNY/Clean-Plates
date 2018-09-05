const BASE_URL = process.env.REACT_APP_API_URL

export function fetchRestaurants() {
    return fetch(`${BASE_URL}/restaurants`)
      .then(resp => resp.json())
      .catch(err => {
        throw Error(err);
      });
  }

export function fetchOneRestaurant(id) {
    return fetch(`${BASE_URL}/restaurants/${id}`)
    .then(resp => resp.json())
    .catch((e) => {
        throw Error(e)
    })
  }

