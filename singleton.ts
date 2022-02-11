// class Logger{
//     public user:object = null;

//     // constructor(user:object){
//     //     this.user = user
//     // }

//     login(user:object){
//         this.user = user
//         return this.user
//     }
// }

// let user1 = new Logger();
// console.log(
//     user1.login({
//         name: "Jackson",
//         password: "12345"
//     })
// );

// let user2 = new Logger();
// console.log(
//     user2.login({
//         name: "Trevor",
//         password: "67890"
//     })
// );

// let user3 = new Logger();
// console.log(
//     user3.login({
//         name: "Mercy",
//         password: "why"
//     })
// );


// Implementing Singleton Pattern (Single Responsobility Principle)

class Logger{

    // 1. Restrict creation of Objects from outside the class
    private static user:object = null;

    private constructor(user:object){
        Logger.user = user
    }

    // 2. Ensure only one instance of a class
    static login(user:object){
        if (Logger.user === null){
            new Logger(user)
        }
        return Logger.user
    }

    // 3. Provide a global access to a single instance
    static getLoggedInUser(){
        return Logger.user
    }
}

// let user1 = Logger.login({
//     name: "Jackson",
//     password: "12345"
// });
// console.log(user1);

// let user2 = Logger.login({
//     name: "Trevor",
//     password: "67890"
// });
// console.log(user2);

// let user3 = Logger.login({
//     name: "Mercy",
//     password: "Why"
// });
// console.log(user3);


// After providing global access to a single instance
Logger.login({
    name: "Jackson",
    password: "12345"
});
console.log(Logger.getLoggedInUser());

Logger.login({
    name: "Trevor",
    password: "67890"
});
console.log(Logger.getLoggedInUser());

Logger.login({
    name: "Mercy",
    password: "Why"
});
console.log(Logger.getLoggedInUser());

