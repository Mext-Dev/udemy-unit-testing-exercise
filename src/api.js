const fetch = require('node-fetch')

const getPeoplePromise = fetch => {
    return fetch('https://swapi.co/api/people')
        .then(response =>  response.json())
        .then((res) => {
            return {
                count: res.count,
                result: res.results
            }
    })
}

const getPeople = async (fetch) => {
    const response = await fetch('https://swapi.co/api/people')
    const data = await response.json()

    return{ 
        count: data.count,
        result: data.results
    }
}

module.exports ={
    getPeople,
    getPeoplePromise
}

getPeople(fetch)