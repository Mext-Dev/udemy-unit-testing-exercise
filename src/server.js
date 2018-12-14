const googleDB = [
    'google.com',
    'domain.com',
    'react.org',
    'facebook.com',
    'drive.google.com'
] 

const googleSearch = (searchInput, db) => {
    const matches = db.filter(value => {
        return value.includes(searchInput);
    })

    return matches.length > 3 ? matches.slice(0, 3): matches;
}

// console.log(googleSearch('google', googleDB));

module.exports = googleSearch;