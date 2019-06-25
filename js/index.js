var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');

var pi= Math.PI;
var k = 2*pi/100;
var x = 0;
var max = 33;
var timeout;

draw();

function draw() {
    ctx.clearRect(0, 0, 250, 250);
    ctx.beginPath();
        ctx.arc(125, 125, 100, 0, x * k, false);
        ctx.strokeStyle = 'orange';
        ctx.lineWidth = 20;
        ctx.lineCap = 'round';
        ctx.stroke();
    ctx.closePath();
    x++;

    ctx.beginPath();
    ctx.font = 'bold 70px Arial';
    ctx.fillStyle = 'orange';
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