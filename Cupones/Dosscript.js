const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;
let hearts = [];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function Heart(x, y, size, color) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.color = color;
  this.speed = random(1, 3);
  this.angle = random(0, Math.PI * 2);

  this.draw = function() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(this.size / 2, -this.size / 2, this.size, 0, 0, this.size);
    ctx.bezierCurveTo(-this.size, 0, -this.size / 2, -this.size / 2, 0, 0);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.restore();
  }

  this.update = function() {
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;
    if (this.x < -this.size || this.x > w + this.size || this.y < -this.size || this.y > h + this.size) {
      hearts.splice(hearts.indexOf(this), 1);
    }
  }
}

function createHearts() {
  let heart = new Heart(random(0, w), random(0, h), random(20, 40), `hsl(${random(0, 360)}, ${random(50, 100)}%, ${random(50, 100)}%)`);
  hearts.push(heart);
  setTimeout(createHearts, random(100, 300));
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, w, h);
  hearts.forEach(heart => {
    heart.update();
    heart.draw();
  });
}

createHearts();
animate();

window.addEventListener('resize', () => {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
});
