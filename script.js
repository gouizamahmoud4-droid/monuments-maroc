// Données des villes et monuments
var villes = [
  {
    name: "Rabat",
    id: "Rabat",
    x: 300, y: 150,
    monuments: [
      {name:"Tour Hassan", desc:"Minaret inachevé du XIIe siècle.", img:"https://upload.wikimedia.org/wikipedia/commons/0/0f/Tour_Hassan.jpg"},
      {name:"Kasbah des Oudayas", desc:"Forteresse avec ruelles pittoresques.", img:"https://upload.wikimedia.org/wikipedia/commons/3/36/Kasbah_Oudayas_Rabat.jpg"}
    ]
  },
  {
    name: "Casablanca",
    id: "Casablanca",
    x: 320, y: 200,
    monuments: [
      {name:"Mosquée Hassan II", desc:"Grande mosquée avec le plus haut minaret.", img:"https://upload.wikimedia.org/wikipedia/commons/9/9f/Hassan_II_Mosque_Casablanca.jpg"},
      {name:"Quartier des Habous", desc:"Quartier colonial et traditionnel.", img:"https://upload.wikimedia.org/wikipedia/commons/1/18/Habous_Casablanca.jpg"}
    ]
  },
  {
    name: "Marrakech",
    id: "Marrakech",
    x: 280, y: 350,
    monuments: [
      {name:"Jardin Majorelle", desc:"Jardin coloré anciennement propriété d'Yves Saint Laurent.", img:"https://upload.wikimedia.org/wikipedia/commons/f/f9/Jardin_Majorelle_2014.jpg"},
      {name:"Koutoubia", desc:"Grande mosquée emblématique.", img:"https://upload.wikimedia.org/wikipedia/commons/8/81/Koutoubia_Mosque_Marrakech.jpg"}
    ]
  }
];

// Charger la carte SVG
var svgObject = document.getElementById('maroc-map');
svgObject.addEventListener('load', function() {
  var svgDoc = svgObject.contentDocument;
  
  // Ajouter les villes sur la carte
  villes.forEach(function(ville) {
    var region = svgDoc.getElementById(ville.id);
    if (region) {
      region.style.fill = 'red';
      region.style.cursor = 'pointer';
      region.addEventListener('click', function() {
        showPopup(ville);
      });
    }
  });
});

// Afficher le pop-up
function showPopup(ville) {
  var popup = document.getElementById('popup');
  document.getElementById('popup-title').textContent = ville.name;

  var content = "";
  ville.monuments.forEach(function(monument) {
    content += `<h4>${monument.name}</h4><p>${monument.desc}</p><img src="${monument.img}">`;
  });
  document.getElementById('popup-content').innerHTML = content;

  popup.classList.remove('hidden');
}

// Fermer le pop-up
function closePopup() {
  document.getElementById('popup').classList.add('hidden');
}


