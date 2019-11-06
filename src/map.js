import {hotels} from './mocks/offers'

var center = SMap.Coords.fromWGS84(14.3, 50.88);
var map = new SMap(JAK.gel("map"), center, 14);
map.addDefaultLayer(SMap.DEF_TURIST).enable();
map.addDefaultControls();

//var obrazek = "https://api.mapy.cz/img/api/marker/drop-red.png";
const obrazek = `./img/pin.png`;

var znacky = [];
var souradnice = [];

hotels.forEach((item) => {
	const name = item.name;
	const coords = item.coords;
	var c = SMap.Coords.fromWGS84(coords);
	console.log(coords);

	var options = {
		url:obrazek,
		title:name,
		anchor: {left:10, bottom: 1}  /* Ukotvení značky za bod uprostřed dole */
}

var znacka = new SMap.Marker(c, null, options);
souradnice.push(c);
znacky.push(znacka);

})

var decorationOptions = {
    anchor: {left:0.5, top:0.5}
}
znacky[1].decorate(SMap.Marker.Feature.RelativeAnchor, decorationOptions);

var vrstva = new SMap.Layer.Marker();     /* Vrstva se značkami */
map.addLayer(vrstva);                          /* Přidat ji do mapy */
vrstva.enable();                         /* A povolit */
for (var i=0;i<znacky.length;i++) {
    vrstva.addMarker(znacky[i]);
}

var cz = map.computeCenterZoom(souradnice); /* Spočítat pozici mapy tak, aby značky byly vidět */
map.setCenterZoom(cz[0], cz[1]);        
