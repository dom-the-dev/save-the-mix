const request = (url, init) => {
    init = init || {};

    return fetch(url, init)
        .then(res => res.json())
        .then(result => result)
        .catch(err => console.log(err))
}

export default request;
