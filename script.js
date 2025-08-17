// Créer la map centrée sur le Maroc
var map = L.map('map').setView([31.7917, -7.0926], 5);

// Ajouter une couche OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Ajouter des marqueurs pour quelques monuments
var monuments = [
  {name: "Tour Hassan - Rabat", lat: 34.020882, lon: -6.841650},
  {name: "Kasbah des Oudayas - Rabat", lat: 34.024, lon: -6.834},
  {name: "Médina de Fès", lat: 34.033, lon: -5.000}
];

monuments.forEach(function(monument){
  L.marker([monument.lat, monument.lon]).addTo(map)
    .bindPopup(monument.name);
});
