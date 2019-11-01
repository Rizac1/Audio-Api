let canvas = document.getElementById('audio-canvas');
let ctx = canvas.getContext('2d');

// bars = 200;
// bar_width = 2;

// frequency_array = new Unit8Array(analyser.frequencyBinCount);

window.onload = () => {
    let img = new Image();
    img.src = 'css/jack2.jpg';

    img.onload = () => {
        fill_canvas(img);
    }

    fill_canvas = (img) => {
        canvas = canvas
        ctx = ctx

        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;

        x = window.innerWidth / 2;
        y = window.innerHeight / 2;
        radius = 150;

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        ctx.strokeStyle = 'white';
        ctx.arc(ctx.canvas.width * .266, ctx.canvas.height * .58, 70, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(ctx.canvas.width * .49, ctx.canvas.height * .61, 100, 0, 2 * Math.PI);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.arc(ctx.canvas.width * .74, ctx.canvas.height * .57, 70, 0, 2 * Math.PI);
        ctx.stroke();

    //     analyser.getByteFrequencyData(frequency_array);
    //     for(let i = 0; i < bars; i++) {

    //         rads = Math.PI * 2 / bars;

    //         bar_height = frequency_array[i] * 0.7;

    //         x = x + Math.cos(rads * i) * (radius);
    //         y = y + Math.sin(rads * i) * (radius);
    //         xend = x + Math.cos(rads * i) * (radius + bar_height);
    //         yend = y + Math.sin(rads * i) * (radius + bar_height);

    //         drawBar(x, y, xend, yend, bar_width, frequency_array[i])
    //     }

    //     window.requestAnimationFrame(animationLooper);
    // }

    // function drawBar(x1, y1, x2, y2, width,frequency){
    
    //     var lineColor = "rgb(" + frequency + ", " + frequency + ", " + 205 + ")";
        
    //     ctx.strokeStyle = lineColor;
    //     ctx.lineWidth = width;
    //     ctx.beginPath();
    //     ctx.moveTo(x1,y1);
    //     ctx.lineTo(x2,y2);
    //     ctx.stroke();
    // }

    window.addEventListener('resize', function () {
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;

        img.width = ctx.canvas.width;
        img.height = ctx.canvas.height;
        fill_canvas(img);
    })
}
}
