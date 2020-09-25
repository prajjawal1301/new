//FETCH API AND PROMISES PRACTICE
//Get operation


console.log("First statement")

function fetchData() {
    url = "https://api.github.com/users"
    fetch(url)
        .then((response) => {
            console.log('second statement')
            return response.json()
        }).then((data) => {
            console.log('third statement')
            console.log(data)
        })
}

console.log('fourth statement')
fetchData()
console.log("final statement")

//post operation

console.log('POST METHOD RUN')

function postData() {
    url = "http://dummy.restapiexample.com/api/v1/create"
    data = { "name": "shanu sharma", "salary": "50000000000", "age": "24" }
    conditon = {
        method: 'post',
        header: {
            'content-type': 'application/json'
        },
        body: data
    }

    fetch(url, conditon)
        .then(response => response.json())
        .then(data => console.log(data))
}

postData()
