class Ship {
    constructor() {
        this.x = width / 2;
        this.xdir = 0;
    }

    show() {
        fill(255);  // màu
        rectMode(CENTER);
        // vẽ phi thuyền
        push(); //saves the current drawing style settings +pop()
        noStroke();
        translate(this.x, height - 10); // dịch chuyển
        scale(0.8, 0.8); // kích thước 
        fill('#c32929');
        rect(0, 0, 50, 40); // x,y,rộng,cao of hcn
        fill('#d5d589');
        rect(0, -25, 10, 25);
        pop(); //restores settings of push
    }

    setDir(dir) {
        this.xdir = dir;
    }

    move() {
        this.x += this.xdir * 5;
    }
}