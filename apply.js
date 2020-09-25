person1 = {
    a: 'John',
    b: 'Wright'
}

person2 = {
    a: 'Raj',
    b: 'malhotra'
}

person = {
    a: 'default',
    b: 'name',
    fullName: function () {
        console.log('the full name is ' + this.a + ' ' + this.b)

    }
}

// person.fullName()
person.fullName.apply(person2,)