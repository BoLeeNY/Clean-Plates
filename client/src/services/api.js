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

export function saveNewComment(comment) {
  const opts = {
      method: 'POST',
      body: JSON.stringify(comment),
      headers: {
          'Content-Type': 'application/json'
      }
  };
  return fetch(`${BASE_URL}/restaurants/${comment.restaurant_id}/comments`, opts)
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

