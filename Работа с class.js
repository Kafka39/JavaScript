class User {
    username = 'Kafka39'
    constructor(firstname, age) {
        this.firstname = firstname
        this.age = age
    }

    getUserName() {
        return {username: this.username, firstname: this.firstname, age: this.age}
    }
}

class Staff extends User {
    root = true
    getUserName() {
        return {username: this.username, firstname: this.firstname, age: this.age, root: this.root}
    }
}

const user = new Staff('Denis', 333)

console.log(user.getUserName())
