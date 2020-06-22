// setTimeout(() => console.log('A'), 1000)
// setTimeout(() => console.log('B'), 2000)
// setTimeout(() => console.log('C'), 3000)
// setTimeout(() => console.log('D'), 4000)

// CallBack hell

setTimeout(() => {
    console.log('A')
    setTimeout(() => {
        console.log('B')
        setTimeout(() => {
            console.log('C')
            setTimeout(() => {
                console.log('D')
            },1000)
        },1000)
    }, 1000)
}, 1000)

