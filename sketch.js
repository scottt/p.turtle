var sketch = function (p) {
    var turtle, run;
    p.setup = function () {
    };
    p.draw = function () {
        p.background(200);
        run.animate(2);
    };
};

class Sketch {
    constructor(p) {
        this.p5 = p;
        const self = this;
        p.setup = function() { self.setup(); }
        p.draw = function() { self.draw(); }
        p.mouseClicked = function() { self.mouseClicked(); }
        p.keyPressed = function() { self.keyPressed(); }
        this.looping = true;
        window.mySketch = self;
    }
    setup() {
        const p = this.p5;
        p.createCanvas(400, 400);

        p.background(200);
        p.angleMode(p.DEGREES);
        p.strokeWeight(1);

        if (true) {
            const turtle = new Turtle(p);
            turtle.penDown = true;
            turtle.left(60);

            for (let i = 0; i < 6; i++) {
                turtle.color = 'black';
                turtle.forward(50);
                turtle.right(360 / 6);
            }
            turtle.right(360);
            this.run = turtle.getRun('triangle');
        }
    }
    draw() {
        console.log('draw called');
        const p = this.p5;

        if (true) {
            p.background(200);
            if (true) {
                this.run.animate(2);
            } else {
                this.run.print(true);
                p.noLoop();
            }
        }
    }
    mouseClicked() {
        const p = this.p5;
        if (this.looping) {
            p.noLoop();
        } else {
            p.loop();
        }
        this.looping = !this.looping;
    }
    keyPressed() {
        const p = this.p5;
        if (p.keyCode == p.RIGHT_ARROW && !this.looping) {
            p.redraw();
            return false;
        }
    }
}

var minimal = new p5((p) => { new Sketch(p) });
