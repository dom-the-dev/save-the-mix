const request = (url, init) => {
    init = init || {};

    return fetch(url, init)
        .then((response) => {
            if (response.status !== 200) {
                // TODO: set error handling
            }

            if (!response.ok || response.status === 401) {
                return response.json().then((data) => {
                    let error = {
                        status: response.status,
                        statusText: data.message || response.statusText
                    };
                    return Promise.reject(error);
                })
            }

            return response.json();
        });
};

export default request;
