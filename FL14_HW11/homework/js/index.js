// Your code goed here

var game = document.getElementById("game");
var goo = 0;
for (let i = 0; i < 9; i++) {
    game.innerHTML += '<div class="block"></div>';
}
var allblock = document.getElementsByClassName("block");
game.onclick = function (e) {
    function check() {
        var combo = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
        for (let i = 0; i < combo.length; i++) {
            if (allblock[combo[i][0]].innerHTML == "X" && allblock[combo[i][1]].innerHTML == "X" && allblock[combo[i][2]].innerHTML == "X") return 1;
            if (allblock[combo[i][0]].innerHTML == "O" && allblock[combo[i][1]].innerHTML == "O" && allblock[combo[i][2]].innerHTML == "O") return 2;
        }
    }

    if (goo == 0) {
        if (e.target.innerHTML == "") {
            e.target.innerHTML = "X";
            goo = 1;
            var index = [];
            var j = 0;
            for (let i = 0; i < allblock.length; i++) {
                if (allblock[i].innerHTML == "") {
                    index[j] = i;
                    j++;
                }
            }
            var random = Math.floor(Math.random() * index.length);
            var randblock = index[random];

            function rand() {
                allblock[randblock].innerHTML = "O";
            }

            setTimeout(rand, 1000);
            goo = 0;
        }
    }

    function restart() {
        count = 0;
        goo = 0;
        game.innerHTML = "";
        for (let i = 0; i < 9; i++) {
            game.innerHTML += '<div class="block"></div>';
        }
    }

    var rez = check();
    if (!!rez) {
        switch (rez) {
            case 1:
                goo = 1;
                game.innerHTML = "Победили крестики!";
                break;
            case 2:
                goo = 1;
                game.innerHTML = "Победили нолики!";
                break;
        }
    } else {
        if (index.length == 0) {
            goo = 1;
            game.innerHTML = "Ничья!";
        }
    }
    if (!!rez || index.length == 0) {
        setTimeout(restart, 3000);
    }
}


