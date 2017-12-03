const fetch = require('node-fetch');

const getReviews = (token) => {
    console.log(token);
    const url = `http://sea-info6250-crud.herokuapp.com/topics/garfi/reviews`;
    return fetch(url, {
        method: 'GET',
        credentials: 'include',
        header: {
            Cookie: `userToken=${token}`
        }
    })
    .then(r => r.ok ? r.json() : r.json().then(j => Promise.reject(j)))
    .then(j => {
        console.log(j);
        return j.details;
    })
    .catch(e => console.warn(e));
}

const saveReviews = (token, reviews) => {
    const url = `http://sea-info6250-crud.herokuapp.com/topics/garfi/reviews`;
    fetch(url, {
        method: 'PUT',
        credentials: 'include',
		    body: JSON.stringify({toStore: reviews}),
        header: {
            Cookie: `userToken=${token}`
        }
    })
    .then(r => r.ok ? r.json() : r.json().then(j => Promise.reject(j)))
    .then(j => {
        console.log(j);
        return j;
    })
    .catch(e => console.warn(e));
}

const getMovies = (token) => {
    const url = `http://sea-info6250-crud.herokuapp.com/topics/garfi/movies`;
    return fetch(url, {
        method: 'GET',
        credentials: 'include',
        header: {
            Cookie: `userToken=${token}`
        }
    })
    .then(r => r.ok ? r.json() : r.json().then(j => Promise.reject(j)))
    .then(j => {
        console.log(j);
        return j.details;
    })
    .catch(e => console.warn(e));
}

const saveMovies = (token, movies) => {
    const url = `http://sea-info6250-crud.herokuapp.com/topics/garfi/movies`;
    return fetch(url, {
        method: 'PUT',
        credentials: 'include',
		    body: JSON.stringify({toStore: movies}),
        header: {
            Cookie: `userToken=${token}`
        }
    })
    .then(r => r.ok ? r.json() : r.json().then(j => Promise.reject(j)))
    .then(j => {
        console.log(j);
        return j;
    })
    .catch(e => console.warn(e));
}

const getAuthorization = () => {
    const url = `http://sea-info6250-crud.herokuapp.com/users/garfi/admin/session`;
    return fetch(url, {
        method: 'POST',
        credentials: 'include',
		    body: JSON.stringify({password: 'garfi'})
    })
    .then(r => {
        return r.ok ? r.json() : r.json().then(j => Promise.reject(j))
    })
    .then(j => {
        console.log(j);
        return j;// token is here
    })
    .catch(e => {
        console.warn(e);
        return e;
    });
}

const logoutAdmin = () => {
    const url = `http://sea-info6250-crud.herokuapp.com/users/garfi/admin/session`;
    return fetch(url, {
        method: 'DELETE',
        credentials: 'include',
		    body: JSON.stringify({password:'garfi'})
    })
    .then(r => r.ok ? r.json() : r.json().then(j => Promise.reject(j)))
    .then(j => {
        console.log(j);
        return j;
    })
    .catch(e => console.warn(e));
}

module.exports = {getReviews, saveReviews, getMovies, saveMovies, getAuthorization, logoutAdmin};