function showTest(text,time) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(text)
            resolve()
        },time)
    })
}
// Using async await
async function runText(){
    try{
        await showTest('1',1000)
        await showTest('2',1000)
        await showTest('3',1000)
        await showTest('4',1000)
        console.log('Done')
    }
    catch(err){
        console.log(err)
    }
}

runText()

// Promise
// showTest('1',1000)
// .then(() =>  showTest('2',1000))
// .then(() => showTest('3',1000))
// .then(() => showTest('4',1000))