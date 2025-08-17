var map = L.map('map').setView([31.7917, -7.0926], 6);

// Ajouter OpenStreetMap comme fond
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Limiter la carte au Maroc avec maxBounds
map.setMaxBounds([[21, -17], [37.5, -0.5]]);

// Ajouter un GeoJSON du Maroc pour masquer les autres pays
// Ici, tu peux utiliser un fichier maroc.geojson (trouvé sur internet)
fetch('maroc.geojson')
  .then(response => response.json())
  .then(geojson => {
    L.geoJSON(geojson, {
      style: { color: "#ff7800", weight: 2, fillOpacity: 0.1 }
    }).addTo(map);
  });

// Ajouter quelques villes principales
var villes = [
  {name: "Rabat", lat: 34.020882, lon: -6.841650},
  {name: "Casablanca", lat: 33.5731, lon: -7.5898},
  {name: "Marrakech", lat: 31.6295, lon: -7.9811}
];

villes.forEach(function(ville){
  L.marker([ville.lat, ville.lon]).addTo(map)
    .bindPopup(ville.name);
});
