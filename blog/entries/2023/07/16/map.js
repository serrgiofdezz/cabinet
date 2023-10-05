// center of the map
var center = [40.2990, -3.7529];

// Create the map
var map = L.map('map').setView(center, 17);

// Set up the OSM layer
L.tileLayer(
  'https://tile.tracestrack.com/_/{z}/{x}/{y}.png?key=54e3f4571ed5c91b599db36db631cfdc', {
    maxZoom: 19,
    attribution: 'Data: © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>, <a href="https://www.tracestrack.com/">Tracestrack</a>'
  }).addTo(map);

// add a marker in the given location
// L.marker(center).addTo(map);
