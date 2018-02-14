ymaps.ready(init);

function init() {
    var map = new ymaps.Map("map", {
        center: [59.93, 30.32],
        zoom: 12,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });

    var placemark1 = new ymaps.Placemark([59.95, 30.39], {
            hintContent: "ул. Литераторов, д.19",
            balloonContent: "Вкусные бургеры!"
    }, {
            iconLayout: 'default#image',
            iconImageHref: './images/content/map_marker.png',
            iconImageSize: [45, 55]
        });
    var placemark2 = new ymaps.Placemark([59.97, 30.31], {
            hintContent: "ул. Литераторов, д.19",
            balloonContent: "Вкусные бургеры!"
    }, {
            iconLayout: 'default#image',
            iconImageHref: './images/content/map_marker.png',
            iconImageSize: [45, 55]
        });
    var placemark3 = new ymaps.Placemark([59.92, 30.49], {
            hintContent: "ул. Литераторов, д.19",
            balloonContent: "Вкусные бургеры!"
    }, {
            iconLayout: 'default#image',
            iconImageHref: './images/content/map_marker.png',
            iconImageSize: [45, 55]
        });
    var placemark4 = new ymaps.Placemark([59.89, 30.32], {
            hintContent: "ул. Литераторов, д.19",
            balloonContent: "Вкусные бургеры!"
    }, {
            iconLayout: 'default#image',
            iconImageHref: './images/content/map_marker.png',
            iconImageSize: [45, 55]
        });

    map.geoObjects
        .add(placemark1)
        .add(placemark2)
        .add(placemark3)
        .add(placemark4);
}