var mymap = L.map('mapid1').setView([53.43285,-1.37801], 14);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGFub2xuZXIiLCJhIjoiY2twcDk3eDRsMHRvczJ1bnVqdDhud3hnZSJ9.BKNLndpwcRkB_tciHEWhYQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

//Test adding SF geojson to map
//https://leafletjs.com/reference-1.7.1.html#geojson
//https://gis.stackexchange.com/questions/68489/loading-external-geojson-file-into-leaflet-map
//Using Leaflet-Ajax, very concise code...

//https://gis.stackexchange.com/questions/110402/changing-default-style-on-point-geojson-layer-in-leaflet
var myStyle = {
 "color": 'black',
 "weight": 7,
 "opacity": 0.75
};

var geojsonLayer = new L.GeoJSON.AJAX("mapdata/test_sf.geojson", {
  style: myStyle
});

geojsonLayer.addTo(mymap);



// L.geoJSON(data, {
//     style: function (feature) {
//         return {color: feature.properties.color};
//     }
// }).bindPopup(function (layer) {
//     return layer.feature.properties.description;
// }).addTo(map);


//test javascript in gh pages
$('#jstest').text('Javascript works! Huzzah!')
