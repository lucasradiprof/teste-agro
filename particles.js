const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.zIndex = "0";
canvas.style.pointerEvents = "none";

let w, h;
function resize(){
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const particles = [];

for(let i=0;i<80;i++){
  particles.push({
    x: Math.random()*w,
    y: Math.random()*h,
    vx:(Math.random()-0.5)*0.6,
    vy:(Math.random()-0.5)*0.6
  });
}

function animate(){
  ctx.clearRect(0,0,w,h);

  for(let p of particles){
    p.x += p.vx;
    p.y += p.vy;

    if(p.x<0 || p.x>w) p.vx *= -1;
    if(p.y<0 || p.y>h) p.vy *= -1;

    ctx.fillStyle = "rgba(0,255,204,0.7)";
    ctx.beginPath();
    ctx.arc(p.x,p.y,2,0,Math.PI*2);
    ctx.fill();

    for(let p2 of particles){
      let dist = Math.hypot(p.x-p2.x,p.y-p2.y);
      if(dist < 120){
        ctx.strokeStyle = "rgba(0,170,255,0.15)";
        ctx.beginPath();
        ctx.moveTo(p.x,p.y);
        ctx.lineTo(p2.x,p2.y);
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(animate);
}

animate();
