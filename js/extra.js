var boxes = document.querySelectorAll('.box');

let navBar = document.querySelector('nav');

let mainText = document.querySelectorAll('.main-text');

window.onscroll = addAnim => {
    //console.log("scrolling")
    boxes.forEach((box) => {
        if (window.scrollY >= box.offsetTop - window.innerHeight) //
        {
            box.classList.add('animated');
        }
    });

    if (window.scrollY > 0) {
        navBar.classList.add('sticky1')
    } else {
        navBar.classList.remove('sticky1')
    }


    mainText.forEach((sec) => {
        if (window.scrollY >= sec.offsetTop - window.innerHeight) //
        {
            sec.classList.add('sec-anim');
        }
    });
};

let features = document.getElementById('features');
let featuresX = 1;
let direction = true;

function ts() {


    if (featuresX == features.scrollWidth) direction = false;
    else if (featuresX == 0) direction = true;

    if (direction) features.scrollBy(1, 0);
    else features.scrollBy(-1, 0);
    if (direction) featuresX++;
    else featuresX--;

}

let scrollTimer = setInterval(ts, 1);



/*
let canvas = document.getElementById('can');

let ctx = canvas.getContext("2d");




let values = [40, 100, 50];


let w = canvas.width,
    h = canvas.height;

class Bar {
    constructor(startX, startY, endX, endY) {
        this.startX = startX;
        this.startY = startY;
        this.endX = endX;
        this.endY = endY;
    }

    drow = () => {
        ctx.fillRect(this.startX, this.startY, this.endX, this.endY)
    }

};


class Barchart {
    constructor(...bars) {
        this.white_spaces = bars.length + 1;
        this.wtitespace;
        this.one_bar_width;

        this.bars = [];
        for (var i = 0; i < bars.length; i++) //
        {
            this.bars.push(bars[i]);
        }
    }

    drow = () => {

        for (var i = 0; i < this.bars.length; i++) //
        {
            let one_bar = new Bar(this.wtitespace, h - this.bars[i], this.one_bar_width, h)
            one_bar.drow();
        }
        console.log(this.white_spaces);
    }
};



class Barchart_percentage extends Barchart {
    constructor(...bars) {
        super(...bars);

    }

    transform = () => {
        this.wtitespace = 10;
        this.one_bar_width = (w - this.white_spaces * this.wtitespace) / this.white_spaces - 1;

        for (let i = 0; i < this.white_spaces - 1; ++i) {
            this.bars[i] = (this.bars[i] / 100) * h;
        }
    }

    Drow = () => {
        this.transform();
        this.drow();
    }
};



var bc = new Barchart_percentage(50, 50, 50);

bc.Drow()

*/


/*
var Mouse = {
    x: 0,
    y: 0
}
var counter = 0;
window.addEventListener('mousemove', show = (event) => {
    var _x = event.clientX;
    var _y = event.clientY;
    Mouse.x = _x;
    Mouse.y = _y;
    console.log(Mouse)
    if (counter % 1000 === 0) ctx.clearRect(0, 0, w, h);



    ctx.beginPath();
    ctx.arc(_x, _y, 5, 0, 2 * Math.PI);
    ctx.stroke();

    ++counter;
});


window.addEventListener('resize', resize => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    w = innerWidth;
    h = innerHeight;
})
*/