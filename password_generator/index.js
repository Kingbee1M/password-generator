const password = document.getElementById("password")
const btn = document.getElementById("btn")
const first = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const second = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const third = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
btn.addEventListener('click', function(){
    let capAlp= act1()
    let smalAlp = act2()
    let nums = act3()
    int_password = "@" + capAlp + smalAlp + nums
    console.log(nums)
    password.textContent = int_password
})

function act1() {
    let x = first[Math.floor(Math.random()*first.length)]
    return x
}

function act2() {
    let a = second[Math.floor(Math.random()*second.length)]
    let b = second[Math.floor(Math.random()*second.length)]
    let c = second[Math.floor(Math.random()*second.length)]
    let x = a + b + c;
    return x
}

function act3() {
    let a = third[Math.floor(Math.random()*third.length)]
    let b = third[Math.floor(Math.random()*third.length)]
    let c = third[Math.floor(Math.random()*third.length)]
    let x = a + b + c;
    return x
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(x)
}