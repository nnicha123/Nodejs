// console.log('1')
// setTimeout(() => console.log('2'), 1000)
// console.log('3')

console.log('1')
new Promise(resolve =>
    setTimeout(() => {
        console.log('2');
        resolve()
    }, 1000)).then(() => {
        new Promise(resolve =>
            setTimeout(() => {
                console.log('3');
                resolve()
            }, 1000)).then(() => {
                new Promise(resolve =>
                    setTimeout(() => {
                        console.log('4');
                        resolve()
                    }, 1000))
            })
    })