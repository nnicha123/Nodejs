const promise1 = Promise.reject(4)
const promise2 = 43;
const promise3 = new Promise((resolve,reject) => {
    setTimeout(resolve,1000,'foo');
})
Promise.all([promise1,promise2,promise3])
.then((values) => console.log(values))
.catch( err => console.log('Error: ',err))