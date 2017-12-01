const handleErrors = response => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const getResponse = (url, successHandler, errorHandler) => {
    fetch(url)
    .then(handleErrors)
    .then(response => response.json())
    .then(obj => successHandler(obj))
    .catch(error => console.error(error));
};