document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
        });
    });
});

// Colorful Name Display
const flash = document.querySelector('.flash');
const colors = ['darkseagreen', 'mediumpurple', 'orange', 'indianred', 'steelblue', 'wheat']
const strobe = setInterval(()=>{
    flash.style.color = colors[Math.floor(Math.random() * 6)];
    flash.style.fontSize = `${(Math.random() * 4) + 0.5}em`;
}, 100)
setTimeout(()=>{clearInterval(strobe)}, 9000 )

// Solid Name Display
const solid = document.querySelector('.solid')
setTimeout(()=>{
    flash.style.opacity = '0';
}, 1000)
setTimeout(()=>{
    solid.style.opacity = '100%';
}, 5000)

