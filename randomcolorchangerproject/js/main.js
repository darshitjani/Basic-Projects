let btn = document.getElementById("btn");
let arr = ["red", "blue", "yellow", "green", "magenta", "violet", "cyan"]

btn.addEventListener('click', function () {
    let col = arr[Math.floor(Math.random() * arr.length)];
    console.log(col)
    document.body.style.background = col;
})