window.onload = function() {
    let canvas = document.querySelector('#canvas');
    let ctx = canvas.getContext('2d');

    let clicks = [[0, 0]];

    canvas.onclick = function(e) {
        e = e || window.event;
        clicks.push([e.offsetX, e.offsetY]);
        
        if(clicks.length > 2) {
            ctx.moveTo(clicks[clicks.length-3][0], clicks[clicks.length-3][1]);
            ctx.lineTo(e.offsetX, e.offsetY);
        }
        ctx.moveTo(clicks[clicks.length-2][0], clicks[clicks.length-2][1]);
        ctx.lineTo(e.offsetX, e.offsetY);

        ctx.stroke();
    }
}