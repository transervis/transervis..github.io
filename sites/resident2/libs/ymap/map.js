ymaps.ready(init);

var placemarks = [
{
    latitude: 55.04199592749942,
    longitude: 82.9391296497654,
    hintContent: '<div class="map__hint"><img class="map__burger-img" src="img/dest/map/map_logo2.png" alt="Resident"/><div class="map_text">Аренда квартир<br>ул. Крылова, 64/1</div></div>',
    balloonContent: [
    '<div align="center" class="map__balloon">',
    '<img class="map__burger-img" src="img/dest/map/map_logo2.png" alt="Resident"/>',
    '<br>Аренда квартир<br>ул. Крылова, 64/1',
    '</div>'
    ],
},
],
geoObjects= [];

function init() {
    var map = new ymaps.Map('map', {
        center: [55.04199592749942,82.9391296497654],
        zoom: 16,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });

    for (var i = 0; i < placemarks.length; i++) {
        geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude],
        {
            hintContent: placemarks[i].hintContent,
            balloonContent: placemarks[i].balloonContent.join('')
        },
        {
            iconLayout: 'default#image',
            iconImageHref: 'img/dest/map/map_logo.png',
                // iconImageSize: [46, 57],
                iconImageSize: [100, 83],
                iconImageOffset: [-50, -74],
                // iconImageClipRect: [[415, 0], [461, 57]]
            });
    }

    var clusterer = new ymaps.Clusterer({
        clusterIcons: [
        {
            // href: 'img/dest/map/map_logo2.png',
            // size: [100, 100],
            // offset: [-50, -50]
        }
        ],
        clusterIconContentLayout: null
    });

    map.geoObjects.add(clusterer);
    clusterer.add(geoObjects);
}