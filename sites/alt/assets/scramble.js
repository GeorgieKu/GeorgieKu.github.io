"use strict"

document.addEventListener('DOMContentLoaded', () => {
    const isRolling = Symbol("rolling text");
    function getPositions(length) {
        return Array.from(new Array(length), () => [
            (length * Math.random() | 0) % length,
            (length * Math.random() | 0) % length,
        ]);
    }

    async function rollText(element) {

        if(element[isRolling]) return;

        element[isRolling] = true;
        const word = [...element.textContent];
        const ps = getPositions(word.length);
        const computedWords = [word.join("")];

        for(const [p1, p2] of ps) {
            [word[p1], word[p2]] = [word[p2], word[p1]];
            computedWords.push(element.textContent = word.join(""));
            await delay(30);
        }

        while(computedWords.length) {
            const word = computedWords.pop();
            element.textContent = word;
            await delay(30);
        }
        element[isRolling] = false;
    }

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    function rollHandler({ target }) {

        if(target.matches(".roll-text")) 
            rollText(target);
    }
    
    document.addEventListener('scroll', function() {
        const scrambleText = document.querySelectorAll('.title-section.h2.scrumble');
        scrambleText.forEach(item => {
            item.getBoundingClientRect().top;
            if ((+item.getBoundingClientRect().top <= (window.screen.height/2 + 7)) && (+item.getBoundingClientRect().top >= (window.screen.height/2 - 7))) {
                item.classList.add('roll-text');
                rollText(item);
            }
        })
    })

    const sliderText = document.querySelectorAll('.slide-title.h2.text-scrumble.first-screen');
    sliderText.forEach(item => {
        item.classList.add('roll-text');
        rollText(item);
    });
    sliderText.forEach(item => {
        item.addEventListener('pointerover', () => {
            item.classList.remove('roll-text');
        });
    });
    const prev = document.querySelector('.offer__slider-prev');
    const next = document.querySelector('.offer__slider-next');
    if(prev) {
        prev.addEventListener('click', () => {
            sliderText.forEach(item => {
                item.classList.add('roll-text');
                rollText(item);
            });
        });
    }
    if(next) {
        next.addEventListener('click', () => {
            sliderText.forEach(item => {
                rollText(item);
            });
        });
    }
    function moveTitleText () {
        const titleText = document.querySelectorAll('.corners-stage .slide-title.h2');
        titleText.forEach(item => {
            item.classList.add('roll-text');
            rollText(item);
        });
    }
    setTimeout(moveTitleText, 200);
    setInterval(moveTitleText, 4000);
    addEventListener("pointerover", rollHandler);
    addEventListener("pointerout", rollHandler);

});