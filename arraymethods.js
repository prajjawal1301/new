//array.from()


a = 'prajjwal'
let a1 = Array.from(a)
console.log(a1)


const map1 = new Map([[1, 2], [2, 4], [4, 5]])
console.log(Array.from(map1))


const map2 = new Map([['1', 'a'], ['2', 'b'], ['3', 'c']])
console.log(Array.from(map2))
console.log(Array.from(map2.values()))
console.log(Array.from(map2.keys()))


//Array.isArray

console.log(Array.isArray([['1', 'a'], ['2', 'b'], ['3', 'c']]))
console.log(Array.isArray({ a: '1', b: 2 }))

//Array.of()

console.log(Array.of(7, 34, 566, 'q'))
console.log(Array(10))

//Array.concat

a = [1, 2, 3, 4, 5]
b = [2, 4, 55, 6, 6, 7]
c = [234, 445, 667]

const d = a.concat(b, c)
console.log(d)

Array.copywithin

const e = [1, 2, 4, 4, 5, 66, 7, 8, 8]
console.log(e.copyWithin(0, 7, 8))

//Array.entries

const e1 = [1, 2, 4, 4, 5, 66, 7, 8, 8]
let iterator2 = (e1.entries())
console.log(iterator2.next().value)
console.log(iterator2.next().value)
console.log(iterator2.next().value)

//Array.pop

const e2 = [1, 2, 3, 4, 5]
e2.pop()
e2.shift()
console.log(e2)

//Array.shift
e2.shift()
console.log(e2)

Array.push // Array.unshift

e2.push('shnau', 'sharma')
console.log(e2)

e2.unshift('sharma shanu')
console.log(e2)

// Array.map

const e3 = e2.map(num => 2 * num)
console.log(e2)
console.log(e3)

e4 = [{
    name: 'shanu',
    age: 24,
    salary: 30448550
}, {
    name: 'harshit',
    age: 24,
    salary: 30432248550
}]
let e5 = e4.map((x) => x)

console.log(e4)
console.log(e5)


//Array.every

console.log(e2.every(x => x < 1))

//Array.fill()

e2.fill(5, 2, 3)
console.log(e2)

//Array.find

console.log(e2.find(x => x > 2))
e6 = [{
    name: 'shanu',
    age: 24,
    salary: 100000
}, {
    name: 'harshit',
    age: 24,
    salary: 200000
}]

console.log(e6.find(x => x.salary = 200000))

//Array.filter()

let e7 = e2.filter(x => x > 3)
console.log(e7)

//Array.findIndex

console.log(e2.findIndex(x => x > 4))

// filter objects with invalid ids
f = [{
    id: -1,
    name: 'shanu',
    age: 23
},
{
    id: 2,
    name: 'shanu',
    age: 23
}, {
    id: 3,
    name: 'shanu',
    age: 23
}, {
    id: -4,
    name: 'shanu',
    age: 23
}
]


let f1 = f.filter(x => {
    if (x.id >= 0) {
        return true
    }
})
console.log(f1)

//filter items acc to search

const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

const filterItems = (arr, query) => {
    return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
}

console.log(filterItems(fruits, 'ap'))
console.log(filterItems(fruits, 'ban'))

//Array.flat

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat(1));

const arr2 = [0, 1, 2, [[3, 4]]];

console.log(arr2.flat(2));

//Array.values(), Array.keys()


const array1 = ['a', 'b', 'c'];
const iterator = array1.values();
const iterator1 = array1.keys()

for (const value of iterator) {
    console.log(value);
}

for (const key of iterator1) {
    console.log(key)
}

//Array.toString()

const array2 = [1, 2, 'a', 'shanu', 'asdsad'];

console.log(array2.toString());

//Array.some()

const array = [1, 2, 3, 4, 5];
console.log(array.some((element) => element % 2 === 0))

//Array.splice

g = [1, 2, 3, 4, 55, 6]
g.splice(2, 1, 788)
console.log(g)

//Array.slice()

let g1 = (g.slice(0))
console.log(g)

g1.splice(2, 1)
console.log(g1)

// Array.forEach

const items = ['item1', 'item2', 'item3']
const copyItems = []

//using for loop
for (let i = 0; i < items.length; i++) {
    copyItems.push(items[i])
}

// using forEach
items.forEach(function (item) {
    copyItems.push(item)
})
console.log(copyItems)

//Array.includes() Array.indexOf , Array.join()

const pets = ['cat', 'dog', 'bat']

console.log(pets.includes('cat'))
console.log(pets.indexOf('cat'))
console.log(pets.join())
console.log(pets.toString())



