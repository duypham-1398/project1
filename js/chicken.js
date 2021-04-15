class Chicken {
    constructor(x, y) {
        this.blood = 3;
        this.x = x;
        this.y = y;
        this.rotate = 1.5559;
        this.r = 30;
        this.xdir = 1;
    }

    show() {
        push();
        noStroke();
        translate(this.x, this.y);
        scale(0.8, 0.8);
        rotate(this.rotate);
        // vẽ gà
        fill('yellow');
        ellipse(0, 0, 40, 40);
        fill('blue');
        ellipse(5, 0, 25, 25);
        fill('red');
        ellipse(17, 0, 20, 20);
        pop();
    }

    move() {
        this.x = this.x + this.xdir;
    }

    shiftDown() {
        this.xdir *= -1;
        this.y += this.r;
    }

    subBlood() {
        this.blood -= 1;
    }
}