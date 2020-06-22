// Promise all
getRandom = (min,max) => Math.floor(Math.random()*(max-min)) + min

pmRandom = () => {
    return new Promise((resolve,reject) => {
        let n = getRandom(1,9)
        if(n < 5) resolve(n)
        else reject(n)
    })
}

const pm1 = pmRandom()
const pm2 = pmRandom()
const pm3 = pmRandom()

Promise.all([pm1,pm2,pm3]).then( (result) => console.log('Pass all: ',result))
.catch(e => console.log('Error: ',e));