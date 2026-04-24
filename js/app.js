let speed = 2; 
let scale = 0.50;
let canvas, ctx, logoColor = '#00000000';

let dvd = {
    x: 300,
    y: 300,
    xspeed: speed,
    yspeed: speed,
    img: new Image()
};

(function main(){
    canvas = document.getElementById("tv-screen");
    ctx = canvas.getContext("2d");
    
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    dvd.img.src = 'dvd-logo.png';
    
    dvd.img.onload = () => {
        update();
    };
})();

function update() {
    // 1. Clear Screen
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 2. Draw Background Text (Centered on screen)
    ctx.fillStyle = '#333'; // Dimmer color so it looks like a background
    ctx.font = 'bold 80px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText("ak9099080.github.io/TSA", canvas.width / 2, canvas.height / 2);

    const w = dvd.img.width * scale;
    const h = dvd.img.height * scale;

    // 3. Draw Logo Background & Image (Bounces over the text)
    ctx.fillStyle = logoColor;
    ctx.fillRect(dvd.x, dvd.y, w, h);
    ctx.drawImage(dvd.img, dvd.x, dvd.y, w, h);

    // 4. Move & Physics
    dvd.x += dvd.xspeed;
    dvd.y += dvd.yspeed;

    checkHitBox();
    requestAnimationFrame(update); 
}

function checkHitBox(){
    const w = dvd.img.width * scale;
    const h = dvd.img.height * scale;

    if(dvd.x + w >= canvas.width || dvd.x <= 0){
        dvd.xspeed *= -1;
    }
    if(dvd.y + h >= canvas.height || dvd.y <= 0){
        dvd.yspeed *= -1;
    }    
}
