window.onload = function() {
    let canvas = document.querySelector('#canvas');
    let ctx = canvas.getContext('2d');

    let clicks = [[0, 0]];

    canvas.onclick = function(e) {
        e = e || window.event;
        let x = e.offsetX;
        let y = e.offsetY;
        let xy = [x, y];
        clicks.push(xy);
        console.log(clicks);

        ctx.moveTo(0, 0);
        ctx.lineTo(x, y);
        ctx.stroke();

    }
}