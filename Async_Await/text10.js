let done = false

function isItDoneYet() {
    return new Promise((resolve, reject) => {
        if (done) resolve('Here is the thing I built') 
        else reject('Still working on something else')
    })
}

async function checkIt() {
    try {
        console.log(await isItDoneYet())
    } catch (err) {
        console.log(err)
    }
}
    checkIt()