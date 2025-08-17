// Centrer la map sur le Maroc et limiter le zoom pour ne pas voir les autres pays
var map = L.map('map', {
    minZoom: 5,
    maxZoom: 8,
    maxBounds: [[21.0, -17.0], [37.5, -0.5]] // Limite sud-ouest et nord-est du Maroc
}).setView([31.7917, -7.0926], 6);

// Ajouter OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Ajouter quelques villes principales du Maroc
var villes = [
  {name: "Rabat", lat: 34.020882, lon: -6.841650},
  {name: "Casablanca", lat: 33.5731, lon: -7.5898},
  {name: "Marrakech", lat: 31.6295, lon: -7.9811},
  {name: "Fès", lat: 34.0331, lon: -5.0003},
  {name: "Agadir", lat: 30.4278, lon: -9.5981}
];

villes.forEach(function(ville){
  L.marker([ville.lat, ville.lon]).addTo(map)
    .bindPopup(ville.name);
});
