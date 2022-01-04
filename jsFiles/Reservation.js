let typeVehicule = document.getElementById("vehicule-type");
let thirdSelection = document.querySelector(".third-selection");
let jour = document.getElementById("jour");
let form = document.querySelector("form");
let popUpOverlay = document.createElement("div");
let popUp = document.createElement("div");
let manuelle = document.getElementById("manuelle");
let automatique = document.getElementById("automatique");
let result = document.getElementById("popUp-result");
typeVehicule.addEventListener("change", () => {
  let selectValue = typeVehicule.value;
  if (thirdSelection.innerHTML !== "") {
    thirdSelection.innerHTML = "";
  }
  let h3 = document.createElement("h3");
  h3.appendChild(document.createTextNode("Choisir l'option desirer"));
  thirdSelection.appendChild(h3);
  thirdSelection.appendChild(moteur(selectValue));
});
let resultType = document.getElementById("result-type");
let moteurResult = document.getElementById("result-moteur");
typeVehicule.addEventListener("change", () => {
  let vehicule = typeVehicule.value;
  resultType.innerHTML = vehicule;

  if (vehicule === "Berline" || vehicule === "Camion") {
    automatique.checked = true;
    automatique.disabled = false;
    manuelle.disabled = true;
  } else if (vehicule === "Moto") {
    automatique.checked = false;
    manuelle.checked = false;
    automatique.disabled = true;
    manuelle.disabled = true;
  } else {
    manuelle.checked = true;
    manuelle.disabled = false;
    automatique.disabled = true;
  }
});
function moteur(vehicule) {
  let select = document.createElement("select");
  select.addEventListener("change", () =>{
    moteurResult.innerHTML = select.value;
  })
  select.setAttribute("id", "moteur");
  select.setAttribute("required", true);
  if (vehicule === "Moto") {
    select.append(electrique(), essence(), vide());
  } else if (vehicule === "Citadine") {
    select.append(electrique(), essence(), hybride(), diesel(), vide());
  } else if (vehicule === "Berline") {
    select.append(hybride(), essence(), diesel(), vide());
  } else if (vehicule === "Compacte") {
    select.append(hybride(), essence(), diesel(), vide());
  } else if (vehicule === "Utilitaire") {
    select.append(diesel(), vide());
  } else if (vehicule === "Engin-chantier") {
    select.append(diesel(), essence(), vide());
  } else if (vehicule === "Camion") {
    select.append(diesel(), vide());
  }
  return select;
}

function electrique() {
  let electrique = document.createElement("option");
  electrique.setAttribute("value", "Electrique");
  electrique.appendChild(document.createTextNode("Electrique"));
  return electrique;
}
function hybride() {
  let hybride = document.createElement("option");
  hybride.setAttribute("value", "Hybride");
  hybride.appendChild(document.createTextNode("Hybride"));
  return hybride;
}
function essence() {
  let essence = document.createElement("option");
  essence.setAttribute("value", "Essence");
  essence.appendChild(document.createTextNode("Essence"));
  return essence;
}
function diesel() {
  let diesel = document.createElement("option");
  diesel.setAttribute("value", "Diesel");
  diesel.appendChild(document.createTextNode("Diesel"));
  return diesel;
}

function vide() {
  let vide = document.createElement("option");
  vide.setAttribute("value", "");
  vide.setAttribute("selected", true);
  vide.style.display = "none";
  vide.appendChild(document.createTextNode("- Choisir -"));
  return vide;
}
let price = document.getElementById("result-price");

//Calculer le prix par jour
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let jours = jour.value;
  let selectValue = typeVehicule.value;

  

  let type = "",
    period = 0,
    moteur = document.getElementById("moteur").value,
    bv = "",
    prixTotal = 0,
    prix = 0;
  period = jours;
  if (selectValue === "Moto") {
    type = "Moto";
    prix = period * 10;
    prixTotal = prix;
  } else if (selectValue === "Citadine") {
    type = "Citadine";
    prix = period * 12;
    prixTotal = prix;
  } else if (selectValue === "Berline") {
    type = "Berline";
    prix = period * 20;
    prixTotal = prix;
  } else if (selectValue === "Compacte") {
    type = "Compacte";
    prix = period * 14;
    prixTotal = prix;
  } else if (selectValue === "Utilitaire") {
    type = "Utilitaire";
    prix = period * 16;
    prixTotal = prix;
  } else if (selectValue === "Engin-chantier") {
    type = "Engin-chatier";
    prix = period * 900;
    prixTotal = prix;
  } else if (selectValue === "Camion") {
    type = "Camion";
    prix = period * 250;
    prixTotal = prix;
  }
  // calculer option boite a vitess
  if (selectValue === "Berline" || selectValue === "Camion") {
    bv = "Automatique";
    prixTotal += prix * 0.19;
  } else if (selectValue !== "Moto") {
    bv = "Manuelle";
  }
  // calculer option moteur
  if (moteur === "Electrique") {
    prixTotal += prix * 0.05;
  } else if (moteur === "Hybride") {
    prixTotal += prix * 0.09;
  } else if (moteur === "Essence") {
    prixTotal += prix * 0.14;
  } else {
    prixTotal += prix * 0.21;
  }
  document.getElementById("popUp-result").style.display = "block";
  price.innerHTML = prixTotal;
  popUpOverlay.classList.add("pop-up-overlay");
  document.body.appendChild(popUpOverlay);
  });

  
   
