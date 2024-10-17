ymaps.ready(init);



function init() {
    var myMap = new ymaps.Map("map", {
        center: [20.0, 20.0],
        zoom: 3,
        controls: ['zoomControl', 'fullscreenControl'],
        copyrightControl: false
    }, {
        minZoom: 2, // минимальный зум
    });

    myMap.behaviors.disable('scrollZoom'); 


    // Создание кластеризаторов для разных регионов
    var zambiaClusterer = new ymaps.Clusterer({
        clusterIcons: [{
            href: './img/clusters/afrika.svg', // Путь к изображению для кластеров Замбии
            size: [62, 62],
            offset: [-31, -31]
        }],
        clusterNumbers: [10]
    });

    var chinaClusterer = new ymaps.Clusterer({
        clusterIcons: [{
            href: './img/clusters/china.svg', // Путь к изображению для кластеров Китая
            size: [62, 62],
            offset: [-31, -31]
        }],
        clusterNumbers: [10]
    });

    var russiaClusterer = new ymaps.Clusterer({
        clusterIcons: [{
            href: './img/clusters/russia.svg', // Путь к изображению для кластеров России
            size: [62, 62],
            offset: [-31, -31]
        }],
        clusterNumbers: [10]
    });

    var europeClusterer = new ymaps.Clusterer({
        clusterIcons: [{
            href: './img/clusters/europe.svg', // Путь к изображению для кластеров Европы
            size: [62, 62],
            offset: [-31, -31]
        }],
        clusterNumbers: [10]
    });

    var turkeyClusterer = new ymaps.Clusterer({
        clusterIcons: [{
            href: './img/clusters/turkey.svg', // Путь к изображению для кластеров Турции
            size: [62, 62],
            offset: [-31, -31]
        }],
        clusterNumbers: [10]
    });

    var argentinaClusterer = new ymaps.Clusterer({
        clusterIcons: [{
            href: './img/clusters/sa.svg', // Путь к изображению для кластеров Аргентины
            size: [62, 62],
            offset: [-31, -31]
        }],
        clusterNumbers: [10]
    });

    var northAmericaClusterer = new ymaps.Clusterer({
        clusterIcons: [{
            href: './img/clusters/na.svg', // Путь к изображению для кластеров Северной Америки
            size: [62, 62],
            offset: [-31, -31]
        }],
        clusterNumbers: [10]
    });

    // Функция для генерации случайного смещения вокруг центральной точки
    function getRandomOffset(center, radius) {
        var angle = Math.random() * 2 * Math.PI;
        var offsetLat = (Math.random() * radius) * Math.cos(angle);
        var offsetLng = (Math.random() * radius) * Math.sin(angle);
        return [center[0] + offsetLat, center[1] + offsetLng];
    }

    // Определение центральных точек для каждой зоны
    var zambiaCenter = [-13.0, 28.0]; 
    var chinaCenter = [35.0, 104.0];  
    var russiaCenter = [60.0, 90.0];  
    var europeCenter = [48.0, 10.0];  
    var turkeyCenter = [39.0, 35.0];  
    var argentinaCenter = [-35.0, -65.0];
    var northAmericaCenter = [40.0, -100.0]; 

    // Замбия
    var zambiaGeoObjects = [];
    for (var i = 0; i < 12; i++) {
        zambiaGeoObjects.push(new ymaps.Placemark(getRandomOffset(zambiaCenter, 0.5), {
            balloonContent: 'Метка из Замбии'
        }, {
            iconLayout: 'default#image',
            iconImageHref: './img/clusters/afrika.svg', // Путь к вашей кастомной иконке для Замбии
            iconImageSize: [30, 30], // Размер иконки
            iconImageOffset: [-15, -15] // Смещение иконки
        }));
    }
    
    // Китай
    var chinaGeoObjects = [];
    for (var i = 0; i < 7; i++) {
        chinaGeoObjects.push(new ymaps.Placemark(getRandomOffset(chinaCenter, 0.5), {
            balloonContent: 'Метка из Китая'
        }, {
            iconLayout: 'default#image',
            iconImageHref: './img/clusters/china.svg', // Путь к кастомной иконке для Китая
            iconImageSize: [30, 30],
            iconImageOffset: [-15, -15]
        }));
    }
    
    // Россия
    var russiaGeoObjects = [];
    for (var i = 0; i < 12; i++) {
        russiaGeoObjects.push(new ymaps.Placemark(getRandomOffset(russiaCenter, 0.5), {
            balloonContent: 'Метка из России'
        }, {
            iconLayout: 'default#image',
            iconImageHref: './img/clusters/russia.svg', // Путь к кастомной иконке для России
            iconImageSize: [30, 30],
            iconImageOffset: [-15, -15]
        }));
    }
    
    // Европа
    var europeGeoObjects = [];
    for (var i = 0; i < 10; i++) {
        europeGeoObjects.push(new ymaps.Placemark(getRandomOffset(europeCenter, 0.5), {
            balloonContent: 'Метка из Европы'
        }, {
            iconLayout: 'default#image',
            iconImageHref: './img/clusters/europe.svg', // Путь к кастомной иконке для Европы
            iconImageSize: [30, 30],
            iconImageOffset: [-15, -15]
        }));
    }
    
    // Турция
    var turkeyGeoObjects = [];
    for (var i = 0; i < 12; i++) {
        turkeyGeoObjects.push(new ymaps.Placemark(getRandomOffset(turkeyCenter, 0.5), {
            balloonContent: 'Метка из Турции'
        }, {
            iconLayout: 'default#image',
            iconImageHref: './img/clusters/turkey.svg', // Путь к кастомной иконке для Турции
            iconImageSize: [30, 30],
            iconImageOffset: [-15, -15]
        }));
    }
    
    // Аргентина
    var argentinaGeoObjects = [];
    for (var i = 0; i < 9; i++) {
        argentinaGeoObjects.push(new ymaps.Placemark(getRandomOffset(argentinaCenter, 0.5), {
            balloonContent: 'Метка из Аргентины'
        }, {
            iconLayout: 'default#image',
            iconImageHref: './img/clusters/sa.svg', // Путь к кастомной иконке для Аргентины
            iconImageSize: [30, 30],
            iconImageOffset: [-15, -15]
        }));
    }
    
    // Северная Америка
    var northAmericaGeoObjects = [];
    for (var i = 0; i < 2; i++) {
        northAmericaGeoObjects.push(new ymaps.Placemark(getRandomOffset(northAmericaCenter, 0.5), {
            balloonContent: 'Метка из Северной Америки'
        }, {
            iconLayout: 'default#image',
            iconImageHref: './img/clusters/na.svg', // Путь к кастомной иконке для Северной Америки
            iconImageSize: [30, 30],
            iconImageOffset: [-15, -15]
        }));
    }

    // Добавляем метки в кластеризаторы
    zambiaClusterer.add(zambiaGeoObjects);
    chinaClusterer.add(chinaGeoObjects);
    russiaClusterer.add(russiaGeoObjects);
    europeClusterer.add(europeGeoObjects);
    turkeyClusterer.add(turkeyGeoObjects);
    argentinaClusterer.add(argentinaGeoObjects);
    northAmericaClusterer.add(northAmericaGeoObjects);

    // Добавляем кластеризаторы на карту
    myMap.geoObjects.add(zambiaClusterer);
    myMap.geoObjects.add(chinaClusterer);
    myMap.geoObjects.add(russiaClusterer);
    myMap.geoObjects.add(europeClusterer);
    myMap.geoObjects.add(turkeyClusterer);
    myMap.geoObjects.add(argentinaClusterer);
    myMap.geoObjects.add(northAmericaClusterer);
}