export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' })) // success handler
    .catch(() => new Error()) // failure handler
    .finally(() => console.log('Got a response from the API')); // always
}
