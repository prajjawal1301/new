person1 = {
    a: 'John',
    b: 'Doe'
}

person2 = {
    a: 'Raj',
    b: 'malhotra'
}

person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}


person.fullName.call(person1); 