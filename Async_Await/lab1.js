// Try print a,b,c,d with chained promise

chainPromise = (letter, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(letter)
            resolve()
        }, delay)
    })
}

async function letterDelays(){
    try{
        await chainPromise('a',1000)
        await chainPromise('b',1000)
        await chainPromise('c',1000)
        await chainPromise('d',1000)
    }
    catch(err){
        console.log(err)
    }

}
letterDelays()

// chainPromise('a', 1000)
//     .then(() => chainPromise('b', 1000))
//     .then(() => chainPromise('c', 1000))
//     .then(() => chainPromise('d', 1000))