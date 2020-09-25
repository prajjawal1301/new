person1 = {
    a: 'John',
    b: 'Doe'
}

person2 = {
    a: 'Raj',
    b: 'malhotra'
}

function add() {
    console.log('The full name is ' + this.a + ' ' + this.b)
}

newc1 = add.bind(person1)
newc1()


const module = {
    x: 42,
    getX: function () {
        return (this.x);
    }
};

console.log(module.getX())

const unboundedGetX = module.getX
console.log(unboundedGetX())

const boundedGetX = unboundedGetX.bind(module)
console.log(boundedGetX())
