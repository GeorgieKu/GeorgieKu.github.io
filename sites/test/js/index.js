let hero = document.querySelector('.hero')
let loader = document.querySelector('.loader')
let loaderBtn = document.getElementById('loaderBtn')
let loaderProcent = document.getElementById('loaderProcent')
let miner = document.querySelector('.miner')
let minerBtn = document.getElementById('minerBtn')
let minerImg = document.getElementById('minerImg')
let minerText = document.getElementById('minerText')
let minerText2 = document.getElementById('minerText2')
let valuePerDay = document.getElementById('valuePerDay')
let minerTextCircle = document.querySelector('.miner__text-circle')
let overlay = document.getElementById('overlay');
let modal = document.getElementById('modal')
let modalBtn = document.getElementById('modalBtn')
let modal2 = document.getElementById('modal2')
let earnValue = document.getElementById('earnValue')
let modalBtn2 = document.getElementById('modalBtn2')

const animation = lottie.loadAnimation({
    container: document.getElementById('animation'),
    renderer: 'svg',
    loop: true,
    autoplay: false, 
    path: 'data.json' 
});
function start() {
    loader.style.display = 'block';
    loader.style.animation = 'slideFromBottom .5s ease';
    animation.play();
    
    let percent = 0;
    const increment = 100 / 60; // 100% за 6000 миллисекунд (6 секунд)
    
    const interval = setInterval(() => {
        percent += increment;
        percent = Math.min(percent, 100); // Ограничение до 100%
        loaderProcent.textContent = `${Math.round(percent)}%`;
        
        if (percent >= 100) {
            clearInterval(interval); // Остановка интервала

            hero.style.display = 'none';
            document.querySelector('.loader__text').textContent = 'Ваше устройство идеально подходит!';
            loaderBtn.style.display = 'block';
            animation.stop();
        }
    }, 100); // Обновление каждые 100 миллисекунд (или другой интервал, который вам нужен)
}
loaderBtn.addEventListener('click', function() {
    loader.style.animation = 'slideToBottom .5s ease'
        miner.style.display = 'block'
    setTimeout(() => {
        loader.style.display = 'none';
    }, 500);


})

const animation2 = lottie.loadAnimation({
    container: document.getElementById('animation2'),
    renderer: 'svg',
    loop: true,
    autoplay: false, 
    path: 'data2.json' 
});


let value = 0.0000024;
let intervalId;

function updateValue() {
    value += 0.0000024;
    valuePerDay.textContent = value.toFixed(7);
}

minerBtn.addEventListener('click', function() {
    animation2.play();
    updateValue();
    intervalId = setInterval(updateValue, 1000);
    minerImg.style.animation = 'rotate 2s ease infinite'
    setTimeout(() => {
        clearInterval(intervalId);
        overlay.style.display = 'block';
        modal.style.display = 'block';
    }, 4000);
});

function updateValue2() {
    value += 0.0000424;
    valuePerDay.textContent = value.toFixed(7);
}

modalBtn.addEventListener('click', function() {
    overlay.style.display = 'none';
    modal.style.display = 'none';
    minerText.textContent = '95%'
    minerText2.textContent = '95%'
    minerTextCircle.style.backgroundImage = 'url(../img/status-2.svg)'
    updateValue2();
    intervalId = setInterval(updateValue2, 1000);
    setTimeout(() => {
        clearInterval(intervalId);
        earnValue.textContent = valuePerDay.textContent;
        overlay.style.display = 'block';
        modal2.style.display = 'block';
    }, 4000);
});

modalBtn2.addEventListener('click', function() {
    overlay.style.display = 'none';
    modal.style.display = 'none';
    
    updateValue();
    intervalId = setInterval(updateValue, 1000);
    setTimeout(() => {
        clearInterval(intervalId);
        earnValue.textContent = valuePerDay.textContent;
        overlay.style.display = 'block';
        modal2.style.display = 'block';
    }, 4000);
});