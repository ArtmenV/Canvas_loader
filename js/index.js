var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');

var pi= Math.PI;
var k = 2*pi/100;
var x = 0;
var max = 96;
var timeout;

draw();

function draw() {
    var color = getColor(x);
    ctx.clearRect(0, 0, 250, 250);
    ctx.beginPath();
        ctx.arc(125, 125, 100, 0, x * k, false);
        ctx.strokeStyle = color;
        ctx.lineWidth = 20;
        ctx.lineCap = 'round';
        ctx.stroke();
    ctx.closePath();
    x++;

    ctx.beginPath();
    ctx.font = 'bold 55px Arial';
    ctx.fillStyle = color;
    ctx.textAlign = 'center';
    ctx.fillText(x+'%', 125, 145);
    ctx.closePath();



    if (x < max ) {
        timeout = setTimeout(draw, 100);
    }
    else {
        clearTimeout(timeout);
    }
}

function getColor(x) {
    x = x*255/100;
    y = 255 - x;
    var color = 'rgb('+x+', '+y+', 0)';
    console.log(color);
    return color;
}