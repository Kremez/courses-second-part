let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');

let result = document.querySelector('.result');

rock.onclick = function () {
    result.innerHTML = "<p>You select rock</p><br>";
}
paper.onclick = function () {
    result.innerHTML = "<p>You select paper</p><br>";
}
scissors.onclick = function () {
    result.innerHTML = "<p>You select scissors</p><br>";
}
