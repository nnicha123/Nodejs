const mu = require('./myUtilities')
class Human {
    constructor(name,age=mu.getRandom(20,30)){
        this.name = name,
        this.age = age
    }
    info(){
        console.log(this.name, this.age)
    }
}
module.exports.Human = Human