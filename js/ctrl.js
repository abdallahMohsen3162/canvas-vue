var closer = document.querySelector(".close"),
    show = document.getElementById('show'),
    theNav = document.querySelector('.link-container');

show.onclick = function() {
    theNav.classList.add('show');


}
closer.onclick = function() {
    theNav.classList.remove('show');

}


document.onkeyup = function(e) {
    if (e.key === 'Escape') {
        theNav.classList.remove('show');
    }
}





let canvas = document.querySelector('canvas');

let ctx = canvas.getContext('2d');


canvas.width = innerWidth;

canvas.height = innerHeight;

let w = canvas.width,
    h = canvas.height;


class Circle {
    constructor(x_cor, y_cor, radius, dx, dy, color, maxRad) {
        this.radius = radius;
        this.x_cor = x_cor;
        this.y_cor = y_cor;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
        this.maxRad = maxRad;
        this.minRad = radius;
    }

    update() {
        if (this.x_cor + this.radius > w || this.x_cor - this.radius < 0) { this.dx = -this.dx }

        //if (this.y_cor + this.radius > h) {this.dy = -this.dy;}
        //if (this.y_cor - this.radius < 0) {this.dy = -this.dy;}

        this.x_cor += this.dx;
        this.y_cor += this.dy;
        this.drow();
    }
    drow() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;
        ctx.arc(this.x_cor, this.y_cor, this.radius, 0, 2 * Math.PI, false);
        ctx.fill()
        ctx.stroke();
    }
}

/*
ctx.beginPath();
ctx.arc(Math.floor(Math.random() * innerWidth), innerHeight, 20, 0, 2 * Math.PI);
ctx.stroke();
*/
//let c = new Circle(100, 100, 10, 20, 30);

let arr = [];
let colors = [
    '#FF6F61',
    '#34568B',
    '#88B04B',
    '#92A8D1',
    '#DD4124',
    '#D65076',
    '#5B5EA6',
    '#E15D44',
    '#C3447A',
    '#fa4529',
    '#98B4D4',
];

let numberOfCircles = 0;
let maxNumberOfCircles;

for (let i = 0; i < numberOfCircles; i++) {
    let rad = Math.floor(Math.random() * 30),
        x = Math.floor(Math.random() * innerWidth),
        y = innerHeight - rad,
        dx = (Math.random() - 0.5) * 1,
        dy = Math.random() * 1,
        color = colors[Math.floor(Math.random() * colors.length)],
        maxRad = Math.random() * 100;
    if (maxRad <= rad) maxRad = maxRad + 50;
    arr.push(new Circle(x, y, rad, dx, -dy, color, maxRad));
    arr[i].drow();
}

Mouse = {
    x: 0,
    y: 0
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < arr.length; i++) {
        if ((Math.abs(arr[i].x_cor - Mouse.x) < 100 && Math.abs(arr[i].y_cor - Mouse.y) < 100) && window.scrollY == 0) {
            //action on hover
            if (arr[i].radius < arr[i].maxRad) arr[i].radius++;
        } else {
            if (arr[i].radius > arr[i].minRad) arr[i].radius--;
        }
        arr[i].update();
    }

}
animate();



document.addEventListener('mousemove', function(mouse) {
    Mouse.x = mouse.clientX;
    Mouse.y = mouse.clientY;
});


let AddNewCircle = () => {
    if (arr.length > maxNumberOfCircles) return;
    let rad = Math.floor(Math.random() * 30),
        x = Math.floor(Math.random() * innerWidth),
        y = innerHeight - rad,
        dx = (Math.random() - 0.5) * 1,
        dy = Math.random() * 1,
        color = colors[Math.floor(Math.random() * colors.length)],
        maxRad = Math.random() * 100;
    if (maxRad <= rad) maxRad = maxRad + 50;
    let newCircle = new Circle(x, y, rad, dx, -dy, color, maxRad);
    arr.push(newCircle);
}
AddNewCircle();

setInterval(AddNewCircle, 100);




var slider = new Vue({
    el: '#slider',
    data: {
        cur: 1,
    },
    methods: {
        inc() {
            if (this.cur == 3) this.cur = 1;
            else this.cur++;
        }
    }
});

let increment = () => {
    slider.inc();
}

//let timer = setInterval(increment, 5000);

let timer = setInterval(increment, 5000);




document.addEventListener('DOMContentLoaded', scroll => {
    if (window.innerWidth < 500) {
        maxNumberOfCircles = 100;
    } else {
        maxNumberOfCircles = 500;
    }
    boxes.forEach((box) => {
        if (window.scrollY >= box.offsetTop - 500) //
        {
            //box.style.color = 'black';
            box.classList.add('animated');
        }
    })
});