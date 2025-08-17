// Créer la map centrée sur le Maroc
var map = L.map('map').setView([31.7917, -7.0926], 5);

// Ajouter OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Données des villes et monuments
var villes = [
  {
    name: "Rabat",
    lat: 34.020882,
    lon: -6.841650,
    monuments: [
      {name: "Tour Hassan", description: "Minaret inachevé du XIIe siècle.", image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Tour_Hassan.jpg"},
      {name: "Kasbah des Oudayas", description: "Ancienne forteresse avec ruelles pittoresques.", image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Kasbah_Oudayas_Rabat.jpg"}
    ]
  },
  {
    name: "Casablanca",
    lat: 33.5731,
    lon: -7.5898,
    monuments: [
      {name: "Mosquée Hassan II", description: "Grande mosquée avec le plus haut minaret du Maroc.", image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Hassan_II_Mosque_Casablanca.jpg"},
      {name: "Quartier des Habous", description: "Quartier colonial et traditionnel à la fois.", image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Habous_Casablanca.jpg"}
    ]
  },
  {
    name: "Marrakech",
    lat: 31.6295,
    lon: -7.9811,
    monuments: [
      {name: "Jardin Majorelle", description: "Jardin coloré anciennement propriété d'Yves Saint Laurent.", image: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Jardin_Majorelle_2014.jpg"},
      {name: "Koutoubia", description: "Grande mosquée emblématique avec minaret du XIIe siècle.", image: "https://upload.wikimedia.org/wikipedia/commons/8/81/Koutoubia_Mosque_Marrakech.jpg"}
    ]
  },
  {
    name: "Fès",
    lat: 34.0331,
    lon: -5.0003,
    monuments: [
      {name: "Médina de Fès", description: "Vieille ville historique classée au patrimoine mondial.", image: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Fes_Medina.jpg"},
      {name: "Université Al Quaraouiyine", description: "Fondée en 859, la plus ancienne université encore en activité.", image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Al-Qarawiyyin_Fes.jpg"}
    ]
  },
  {
    name: "Agadir",
    lat: 30.4278,
    lon: -9.5981,
    monuments: [
      {name: "Kasbah d'Agadir Oufella", description: "Ancienne citadelle avec vue panoramique.", image: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Kasbah_Agadir_Oufella.jpg"},
      {name: "Plage d'Agadir", description: "Plage célèbre et promenade animée.", image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Agadir_Beach.jpg"}
    ]
  }
];

// Ajouter des marqueurs et popups
villes.forEach(function(ville){
  var popupContent = `<h3>${ville.name}</h3>`;
  ville.monuments.forEach(function(monument){
    popupContent += `<h4>${monument.name}</h4>`;
    popupContent += `<p>${monument.description}</p>`;
    popupContent += `<img src="${monument.image}" alt="${monument.name}">`;
  });

  L.marker([ville.lat, ville.lon]).addTo(map)
    .bindPopup(popupContent);
});
