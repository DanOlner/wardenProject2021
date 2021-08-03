var mymap = L.map('mapid1').setView([53.43285,-1.37801], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGFub2xuZXIiLCJhIjoiY2twcDk3eDRsMHRvczJ1bnVqdDhud3hnZSJ9.BKNLndpwcRkB_tciHEWhYQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);


//test javascript in gh pages
$('#jstest').text('Javascript works! Huzzah!')
