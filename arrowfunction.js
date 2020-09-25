// LEARNING THE BEHAVIOUR OF THIS IN ARROW FUNCTION

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


//
window.age = 10;

function Person() {
    this.age = 42;
    this.age = 442;
    setTimeout(() => {
        console.log("this.age", this.age);
    }, 100);
}

var p = new Person();