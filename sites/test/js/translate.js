const texts = {
    heroTitle: 'Хотите начать зарабатывать 80$ в день?',
    heroBtn: 'Да',
    heroBtn2: 'Нет',
    loaderText: 'Идет анализ<br> вашего устройства...',
    minerText3: 'Мощность вашего телефона',
    minerText4: 'Доход в день',
    minerText5: 'Ваш майнер:',
    minerBtn: 'Начать майнинг',
    modalText: 'Вы можете улучшить майнер!',
    modalText2: 'Ваш майнер готов к апгрейду, улучшите его, чтобы зарабатывать больше!',
    modalText3: 'Вы заработали <span id="earnValue"></span> BTC',
    modalText4: 'Заберите свой майнер прямо сейчас',
    modalBtn: 'Улучшить майнер',
    modalBtn2: 'Продолжить майнинг',
    modalBtn3: 'Забрать майнер',
    loaderBtn: 'Продолжить',
};

['heroTitle', 'heroBtn', 'heroBtn2', 'loaderText', 'minerText3', 'minerText4', 'minerText5', 'minerBtn', 'modalText', 'modalText2', 'modalText3', 'modalText4', 'modalBtn', 'modalBtn2', 'modalBtn3', 'loaderBtn'].forEach(id => {
    document.getElementById(id).innerHTML = texts[id];
});
