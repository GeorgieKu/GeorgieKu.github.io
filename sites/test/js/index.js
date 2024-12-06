const swiper = new Swiper('.news__swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 'auto',
    loop: false,
    spaceBetween: 30,
    breakpoints: {
        360: {
            centeredSlides: true,
        },
        576: {
            centeredSlides: false,
        }
    }

  });


  function goToShop() {
    // Предполагается, что httpcontext.getParams возвращает объект с параметрами
    const id = httpcontext.getParams().id; // Получаем id пользователя
    if (id) {
        // Формируем URL с добавленным id
        const url = `https://powerofpower.shop/shop?UserId=${id}&Nickname=123`;
        // Выполняем редирект
        window.location.href = url;
    } else {
        console.error('User ID is not defined');
    }
}