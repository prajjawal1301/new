// movie = [
//     {
//         name: "star wars",
//         runtime: 250,
//         Runtime() {
//             console.log('the runtime of ' + this.name + ' is not mentioned')
//         }
//     },

//     {
//         name: "star wars: the last jedi",
//         runtime: 250,
//         Runtime() {
//             console.log('the runtime of ' + this.name + ' is not mentioned')
//         },
//         Actors: function (actor) {
//             console.log('The actors in ' + this.name + ' are', actor)

//         }
//     }

// ]

// movie[1].Actors('daisy')

// movie[0].Runtime()
// movie[1].Runtime()
// movie[1].Actors("Daisy Ridley and Mark Hamill")



// function Name() {
//     console.log(this)

// }
// Name()

// 'use strict';
// car = {
//     name: 'ferrari'
// }



// function New() {
//     console.log(this.car)

// }


// const a = new New()

// dishes = [
//     {
//         name: 'pav bhaji',
//         price: 250,
//         rcp: function (procedure) {
//             console.log('First take ' + this.ingd[1].amount + ' of ' + this.ingd[1].name, procedure)
//         },
//         ingd: [{
//             name: 'kanda',
//             amount: '1kg'
//         },
//         {
//             name: 'tamatar',
//             amount: '2kg'
//         }]
//     },
//     {
//         name: 'vada pav',
//         price: 350,
//         rcp: function (procedure) {
//             console.log('First take ' + this.ingd[0].amount + ' of ' + this.ingd[0].name, procedure)

//         },
//         ingd: [{
//             name: 'kanda',
//             amount: '10kg'
//         },
//         {
//             name: 'tamatar',
//             amount: '20kg'
//         }]
//     }
// ]
// console.log(dishes)
// dishes[0].ingd[1].amount = '50kg'
// dishes[0].rcp('and stir fry them.')



// const module = {
//     x: 42,
//     getX: function () {
//         return (this.x);
//     }
// };

// const unboundedGetX = module.getX
// console.log(unboundedGetX())

// const boundedGetX = unboundedGetX.bind(module)
// console.log(boundedGetX())


// person1 = {
//     a: 'John',
//     b: 'Doe'
// }

// person2 = {
//     a: 'Raj',
//     b: 'malhotra'
// }

// function add(des) {
//     console.log('The full name is ' + this.a + ' ' + this.b, des)
// }

// newc1 = add.bind(person1, 'PHd')
// newc1()

// fullname = {
//     person: function (des) {
//         console.log("the full name of the person is " + this.a + ' ' + this.b, ',', des)
//     }
// }

// fullname.person.call(person2, 'PHd')

// window.age = 45

// function a1() {
//     this.age = 54
//     // return ("the age is " + this.age)
//     setTimeout(function () {
//         return ("the age is " + this.age)
//     })

// }

// let a2 = new a1()
// console.log(a2)

// window.age = 10;

// function Person() {
// this.age = 42;
// this.age = 442;
// setTimeout(() => {
//     console.log("this.age", this.age);
// }, 100);
// }

// var p = new Person();

// EXPLAINING THE BEHAVIOUR OF THIS IN ARROW FUNCTION
class Age {
    constructor(age) {
        this.age = age
    }

    A() {
        setTimeout(function () {
            console.log("the value of age is ", this.age)
        })

    }
    A1() {
        setTimeout(() => {
            console.log("the value of age is ", this.age)
        })

    }

}

let age1 = new Age(43)
age1.A()
age1.A1()