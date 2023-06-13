let username = prompt( "Введите имя:")
console.log(username)
let myHeader = document.getElementById('header')
if (username) {
    myHeader.innerHTML = "Ваш список дел, " + username
} else {
    myHeader.innerHTML = "Список дел, анонимного пользователя:"
}

let count = 0
function add() {
    let myContainer = document.getElementById('container')
    let myInput = document.getElementById('input')
    let value = myInput.value
    count ++
    myContainer.innerHTML = myContainer.innerHTML + "<p> Дело № " + count + value + "</p>"
}
