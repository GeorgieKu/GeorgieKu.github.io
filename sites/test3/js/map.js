let map = document.getElementById('map2')
if (map) {
    ymaps.ready(function () {
        var myMap = new ymaps.Map('map2', {
            center: [55.704808, 37.597809],
            zoom: 15,
            controls: []
        }, {
            suppressMapOpenBlock: true
        });
        myMap.behaviors.disable('scrollZoom');

        // Создание пользовательского макета для иконки
        var customIconLayout = ymaps.templateLayoutFactory.createClass(
            '<div class="custom-icon">' +
            '<img src="./img/map-img.webp" class="icon-image" alt="">' +
            '<span class="icon-content">$[properties.iconContent]</span>' +
            '</div>', {
                build: function () {
                    this.constructor.superclass.build.call(this);
                }
            }
        );

        // Создание метки
        var myPlacemark = new ymaps.Placemark([55.704808, 37.597809], {
            iconContent: 'Донской проезд, 17' // Текст, который будет отображаться рядом с иконкой
        }, {
            // Опции метки
            iconLayout: customIconLayout, // Используйте пользовательский макет
            iconImageSize: [60, 68], // Размер изображения
            iconImageOffset: [60, 68], // Смещение иконки, чтобы нижняя точка была на адресе
        });

        // Добавление метки на карту
        myMap.geoObjects.add(myPlacemark);
    });
}