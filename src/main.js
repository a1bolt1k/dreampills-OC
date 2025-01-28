import './style.css'

document.addEventListener('click', function (e) {
    const click = document.createElement('div');
    click.classList.add('click');
    document.body.appendChild(click);

    const x = e.pageX;
    const y = e.pageY;
    console.log(x,y, e);

    click.style.left = `${x}px`;
    click.style.top = `${y}px`;

    click.style.width = `81px`;
    click.style.height = `122px`;

    click.addEventListener('animationend', () => {
        click.remove();
    });
});

const container = document.getElementById('container-dvd');
const dvds = document.querySelectorAll('.dvd');
const directions = Array.from(dvds).map(() => ({
    x: Math.random() < 0.5 ? 1 : -1,
    y: Math.random() < 0.5 ? 1 : -1,
    speedX: Math.random() * 2 + 1,
    speedY: Math.random() * 2 + 1
}));
function animate() {
    dvds.forEach((dvd, index) => {
        const rect = dvd.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        if (rect.left <= containerRect.left) {
            directions[index].x = Math.abs(directions[index].x);
        }
        if (rect.right >= containerRect.right) {
            directions[index].x = -Math.abs(directions[index].x);
        }
        if (rect.top <= containerRect.top) {
            directions[index].y = Math.abs(directions[index].y);
        }
        if (rect.bottom >= containerRect.bottom) {
            directions[index].y = -Math.abs(directions[index].y);
        }

        const currentX = parseFloat(dvd.style.left || 0);
        const currentY = parseFloat(dvd.style.top || 0);

        dvd.style.left = currentX + directions[index].speedX * directions[index].x + 'px';
        dvd.style.top = currentY + directions[index].speedY * directions[index].y + 'px';
    });

    requestAnimationFrame(animate);
}

dvds.forEach(dvd => {
    dvd.style.left = Math.random() * (window.innerWidth - dvd.offsetWidth) + 'px';
    dvd.style.top = Math.random() * (window.innerHeight - dvd.offsetHeight) + 'px';
});

animate();