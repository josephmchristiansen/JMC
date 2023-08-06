document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("animation");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    class Triangle {
        constructor(x, y, size, color) {
            this.x = x;
            this.y = y;
            this.size = size;
            this.color = color;
        }

        draw() {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x + this.size, this.y);
            ctx.lineTo(this.x + this.size / 2, this.y - this.size);
            ctx.closePath();
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const size = Math.random() * 50;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const opacity = Math.random();
        const triangle = new Triangle(x, y, size, `rgba(0, 0, 255, ${opacity})`);
        triangle.draw();
        requestAnimationFrame(animate);
    }

    animate();
});
