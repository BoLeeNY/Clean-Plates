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

export function fetchComments(id) {
    return fetch(`${BASE_URL}/restaurants/${id}/comments`)
    .then(resp => resp.json())
    .catch((e) => {
        throw Error(e)
  })
}

export function searchRestaurants(name) {
  return fetch(`${BASE_URL}/restaurants/${name}`)
    .then(resp => resp.json())
    .catch(err => {
      throw Error(err);
    });
}

export function deleteComment(comment) {
  const opts = {
      method: 'Delete',
  }
  return fetch(`${BASE_URL}/restaurants/${comment.restaurant_id}/comments/${comment.id}`, opts)
  .catch ((e) => {
      throw Error(e);
  });
}

