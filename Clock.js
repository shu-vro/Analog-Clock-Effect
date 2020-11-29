// The clock's variables
var hr = document.getElementById('hr');
var mn = document.getElementById('mn');
var sc = document.getElementById('sc');

// The ticks.
setInterval(() => {
    var time = new Date();
    let hh = time.getHours() * 30;
    let mm = time.getMinutes() * 6;
    let ss = time.getSeconds() * 6;
    hr.style.transform = 'rotateZ('+(hh + mm/12)+'deg) ';
    mn.style.transform = 'rotateZ('+mm+'deg) ';
    sc.style.transform = 'rotateZ('+ss+'deg) ';
}, 1000);

// Stylings.
var checkbox = document.querySelector('label');
var body = document.querySelector('body');
var clock = document.querySelector('.clock');
checkbox.addEventListener('click', () => {
    body.classList.toggle('white');
    clock.classList.toggle('white');
})
