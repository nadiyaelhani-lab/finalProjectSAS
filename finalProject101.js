 const prompt = require("prompt-sync")();
 let candidats =[];
 let electeurs =[];
 let choix;

do {

    console.log(`
*******************************************
        Gestion des élections
*******************************************
1- Ajouter un candidat
2- Ajouter plusieurs candidats à la fois
3- Afficher les candidats
4- Voter
5- Modifier un candidat
6- Supprimer un candidat
7- Rechercher un candidat
8- Statistiques
9- Quitter
**********************************************
`);

    choix = prompt("Votre choix : ");

    switch (choix) {

        case "1":
            ajouterCandidat();
            break;

        case "2":
            ajouterPlusieursCandidats();
            break;

        case "3":
            afficherCandidats();
            break;

        case "4":
            voter();
            break;

        case "5":
            modifierCandidat();
            break;

        case "6":
            supprimerCandidat();
            break;

        case "7":
            rechercherCandidat();
            break;

        case "8":
            statistiques();
            break;

        case "9":
            console.log("Merci pour votre participation!");
            break;

        default:
            console.log("Choix invalide! Réessayer.");
    }

} while (choix !== "9");

"***********************************************"
"***********************************************"




function ajouterCandidat() {
    let candidat = {
        cin: prompt("Entrez le CIN :"),
        nom: "",
        prenom: "",
        partiPolitique: "",
        age: 0,
        electeur:[]
    };

   function verifierCin(cin) {
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin == cin) {
            return true;
        }
    }

    return false;
}

    candidat.nom = prompt("Entrez le nom :");
    candidat.prenom = prompt("Entrez le prénom :");
    candidat.partiPolitique= prompt ("Nom du parti politique / indépendant(e):")
    candidat.age = Number(prompt("Entrez l'âge :"));
    condidat.electeur = []

    candidats.push(candidat);

    console.log("Candidat ajouté avec succès.");
}


"********************************************************"

function ajouterPlusieursCandidats() {
    let nombre = Number(prompt("Combien de candidats voulez-vous ajouter ?"));

    for (let i = 0; i < nombre; i++) {
        ajouterCandidat();
    }
}


"*********************************************************"


function afficherCandidats() {
    for (let i = 0; i < candidats.length; i++) {
        console.log(candidats[i]);
    }
}
function afficherParParti() {
    let parti = prompt("Entrez le parti politique :");

    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].partiPolitique == parti) {
            console.log(candidats[i]);
        }
    }
}
function trierCandidatsParVotes() {
    for (let i = 0; i < candidats.length - 1; i++) {

        for (let j = 0; j < candidats.length - 1 - i; j++) {

            if (candidats[j].electeur.length < candidats[j + 1].electeur.length) {

                let temp = candidats[j];
                candidats[j] = candidats[j + 1];
                candidats[j + 1] = temp;
            }
        }
    }

    afficherCandidats();
}
"********************************************************"
function Voter () {
    let cinElecteur = prompt("Entrez votre CIN :");

    for (let i = 0; i < candidats.length; i++) {
        for (let j = 0; j < candidats[i].votes.length; j++) {
            if (candidats[i].votes[j] === cinElecteur) {
                console.log("Vous avez déjà voté et vous n’avez pas le droit de modifier votre vote ni de voter à nouveau.");
                return;
            }
        }
    }

    let cinCandidat = prompt("Entrez le CIN du candidat :");

    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin == cinCandidat) {
            candidats[i].votes.push(cinElecteur);
            console.log("Votre vote a été enregistré avec succès.");
            return;
        }
    }

    console.log("Candidat introuvable.");
}
"*********************************************************"
function modifierCandidat() {
    let cin = prompt("Entrez le CIN du candidat à modifier :");

    for (let i = 0; i < candidats.length; i++) {

        if (candidats[i].cin === cin) {

            candidats[i].partiPolitique = prompt("Entrez le nouveau parti politique :");
            candidats[i].age = Number(prompt("Entrez le nouvel âge :"));

            console.log("Candidat modifié avec succès.");
            return;
        }
    }

    console.log("Candidat introuvable.");
}

"*******************************************************"
