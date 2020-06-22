function showTest(text,time) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(text)
            resolve()
        },time)
    })
}

showTest('1',1000)
.then(() =>  showTest('2',1000))
.then(() => showTest('3',1000))
.then(() => showTest('4',1000))