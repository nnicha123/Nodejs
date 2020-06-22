// Try print a,b,c,d with chained promise

chainPromise = (letter, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(letter)
            resolve()
        }, delay)
    })
}

chainPromise('a', 1000)
    .then(() => chainPromise('b', 1000))
    .then(() => chainPromise('c', 1000))
    .then(() => chainPromise('d', 1000))