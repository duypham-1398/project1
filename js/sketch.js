let ship;
let drops = [];
let chickens = [];
let createChicken;
let level = {
    easy: 1500,
    medium: 900,
    hard: 400,
};
let score = 0;

function preload() {
}

function setup() {
    createCanvas(600, 400);
    ship = new Ship();
    document.getElementById("start").addEventListener("click", () => {
        chickens = [];
        let l = document.getElementById('level').value;
        document.getElementById('gameover').innerText = '';

        createChicken = setInterval(function () {
            chickens.push(new Chicken(Math.floor(Math.random() * 600), Math.floor(Math.random() * 200)));
        }, level[l]);
    });
    document.addEventListener('click', function (e) {
        if (document.activeElement.toString() == '[object HTMLButtonElement]') {
            document.activeElement.blur();
        }
    });
}

function draw() {
    rectMode(CENTER);
    background(51);
    ship.show();
    ship.move();

    for (let i = 0; i < drops.length; i++) {
        drops[i].show();
        drops[i].move();

        for (let j = 0; j < chickens.length; j++) {
            if (drops[i].hits(chickens[j])) {
                if (chickens[j].blood) {
                    chickens[j].subBlood();
                } else {
                    document.getElementById('score').innerText = (score += 1)
                    chickens.splice(j, 1);
                }
                drops[i].remove();
            }
        }
    }

    let edge = false;
    for (let i = 0; i < chickens.length; i++) {
        chickens[i].show();
        chickens[i].move();

        if (chickens[i].x > width - 10 || chickens[i].x < 10) {
            edge = true;
        }

        if (chickens[i].y > height) {
            chickens = [];
            clearInterval(createChicken);
            document.getElementById('gameover').innerText = 'Game Over'
        }
    }

    if (edge) {
        for (let i = 0; i < chickens.length; i++) {
            chickens[i].shiftDown();
        }
    }

    for (let i = drops.length - 1; i >= 0; i--) {
        if (drops[i].toDel) {
            drops.splice(i, 1);
        }
    }
}

function keyPressed() {
    if (key === ' ') {
        let drop = new Drop(ship.x, height);
        drops.push(drop);
    }

    if (keyCode === RIGHT_ARROW) {
        ship.setDir(1);
    } else if (keyCode === LEFT_ARROW) {
        ship.setDir(-1);
    }
}

function keyReleased() {
    if (key !== ' ') {
        ship.setDir(0)
    }
}




