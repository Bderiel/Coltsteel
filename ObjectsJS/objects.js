//braket notation and .notation to access object
// cannot use . if prop starts with a number, has a space, and cannot access a variable in .notation


//someObject.friends[0].name

//Build Move object  arr of movie objects with rating titel and has watched


const movieDB = [{
        movie: 'In Brudges',
        rating: '5 starts',
        watched: true
    }, {
        movie: 'Forzen',
        rating: '4.5 starts',
        watched: false
    }, {
        movie: 'Les Miserables',
        rating: '3 starts',
        watched: true
    }


]


movieDB[0].movie


function HaveSeen(str) {
    result = ''
    movieDB.forEach(el => {
        if (el.movie === str && el.watched) {
            result += ('you have seen' + ' ' + str)
        }
    })
    // if (result) return result
    // return 'You have not seen ' + str
return result ? result: ('You have not seen ' + str)
}

console.log(HaveSeen('In Brudges'))

//this underscore is a bunch of functions that one put together