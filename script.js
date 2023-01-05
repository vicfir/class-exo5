// # Bienvenu à Codepital:
// >Dans cet exercice nous aurons des malades qui iront ce faire débuger chez un doctor. Le doctor les diagnostiquera et leur préscrira un remède. Par la suite les malades irons à la pharmacie afin d'acheter leur remède puis le prendrons et seront guérri.

// ## Description des patients
// >les malades ont un nom, une maladie, de l'argent, une poche, un état de santé,ils savent aller à un endroit, prendre un médicamment et payer. Au début, les patients sont dans un salle d'attente. 

class Malades {
    constructor(nom, maladie, argent, poche, etatSante){
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = poche;
        this.etatSante = etatSante;
    }
    traitement(etat){
        this.etatSante = etat;
    }
    goTo(depart, destination){
        depart.splice(depart.indexOf(this),1);
        destination.push(this);
    }
    takeCare(){
        pharmacie.tarif(this);
    }
    paye(prix){
        this.argent -= prix;
        doctor.argent += prix;
    }
}

// |nom|maladie|argent|poche|etatSante|traitement|goTo|takeCare|paye|
// |---|---|---|---|---|---|---|---|---|
// |Marcus|mal indenté|100|vide|malade
// |Optimus|unsave|200|vide|malade
// |Sangoku|404|80|vide|malade
// |DarthVader|azmatique|110|vide|malade
// |Semicolon|syntaxError|60|vide|malade

let marcus = new Malades("Marcus","mal indenté",100,"vide","malade");
let optimus = new Malades("Optimus","unsave",200,"vide","malade");
let sangoku = new Malades("Sangoku","404",80,"vide","malade");
let darthVader = new Malades("DarthVader","azmatique",110,"vide","malade");
let semicolon = new Malades("Semicolon","syntaxError",60,"vide","malade");

let salleAttente = [marcus, optimus, sangoku, darthVader, semicolon];

// ## Description du doctor
// >Le doctor lui reçoit les patients dans son cabinet. Tout d'abord il les diagnostiques puis se fait payé avant de préscrire un traitement. Attention le doctor fait à chaque fois sortir le patient de son cabinet avant de prendre le suivant. Dans son cabinet il y a son chat de race sphynx pour garder un environemment stérile. Son chat miaule toutes les deux secondes dans la console(bonus). La consultation coûte 50€. Les patients son dans un état de traitement avant de sortir du cabinet.

let doctor = {
    nom : "MrDoctor",
    argent : 100,
    cabinet : [],
    diagnostique(patient){
        switch (patient.maladie) {
            case "mal indenté":
                patient.paye(50);
                patient.poche ="ctrl+maj+f";
                break;

            case "unsave":
                patient.paye(50);
                patient.poche = "saveOnFocusChange";
                break;

            case "404":
                patient.paye(50);
                patient.poche = "CheckLinkRelation";
                break;

            case "azmatique":
                patient.paye(50);
                patient.poche = "Ventoline";
                break;

            case "syntaxError":
                patient.paye(50);
                patient.poche = "f12+doc";
                break;
            
            default:
                console.log("maladie introuvable");
                break;
        }
    },
    patientIn(patient){
        patient.goTo(salleAttente, this.cabinet);
        patient.traitement("traitement");
    },
    patientOut(patient){
        patient.goTo(this.cabinet, pharmacie.pharma);
    }
}

// |nom|argent|cabinet|diagnostique|patienTIn|patientOut
// |---|---|---|---|---|---|
// |Debugger|0|[chat]

// ### Grille des diagnostiques
// |maladie|traitement|
// |---|---|
// |mal indenté|`ctrl+maj+f`|
// |unsave|`saveOnFocusChange`|
// |404|`CheckLinkRelation`|
// |azmatique|`Ventoline`|
// |syntaxError|`f12+doc`|

// ## La pharmacie
// >Les patients iront par après à la pharmacie et recevront leur traitement s'ils ont assez d'argent. Dans le cas ou ils ont assez d'argent ils seront alors en bonne santé sinon ils seront mort et il faudra alors les pousser dans un cimetière.
let pharmacie = {
    pharma : [],
    tarif(patient){
        switch (patient.poche) {
            case `ctrl+maj+f`:
                if(patient.argent >= 60){
                    patient.traitement("bonne santé");
                } else {
                    patient.traitement("mort");
                    cimetiere.push(patient);
                }
                break;
            
            case `saveOnFocusChange`:
                if(patient.argent >= 100){
                    patient.traitement("bonne santé");
                } else {
                    patient.traitement("mort");
                    cimetiere.push(patient);
                }
                break;

            case `CheckLinkRelation`:
                if(patient.argent >= 35){
                    patient.traitement("bonne santé");
                } else {
                    patient.traitement("mort");
                    cimetiere.push(patient);
                }
                break;

            case `Ventoline`:
                if(patient.argent >= 40){
                    patient.traitement("bonne santé");
                } else {
                    patient.traitement("mort");
                    cimetiere.push(patient);
                }
                break;

            case `f12+doc`:
                if(patient.argent >= 20){
                    patient.traitement("bonne santé");
                } else {
                    patient.traitement("mort");
                    cimetiere.push(patient);
                }
                break;
                
            default:
                console.log("Le patient n'as pas de prescription");
                break;
        }
    }

}

let cimetiere = [];

// ### Tarif des traitements
// |Traitement|prix|
// |---|---|
// |`ctrl+maj+f`|60€
// |`saveOnFocusChange`|100€
// |`CheckLinkRelation`|35€
// |`Ventoline`|40€
// |`f12+doc`|20€

// # Vérification
// >Grâce à votre débugger suivé à la trace l'évolution de chacun de vos patients. Vérifier bien qu'il quitte à chaque fois la salle d'attente avant d'entrer dans le cabinet et qu'ils sortent bien du cabinet avant de laisser quelqu'un d'autre entré.
//Marcus
console.log(marcus);
console.log(doctor);
console.log(salleAttente);

doctor.patientIn(marcus);
console.log(marcus);
console.log(doctor);
console.log(salleAttente);

doctor.diagnostique(marcus);
console.log(marcus);
console.log(doctor);

doctor.patientOut(marcus);
console.log(marcus);
console.log(doctor);
console.log(pharmacie);

marcus.takeCare();
console.log(marcus);
console.log(cimetiere);

//Optimus
doctor.patientIn(optimus);

doctor.diagnostique(optimus);

doctor.patientOut(optimus);

optimus.takeCare();
console.log(optimus);
console.log(cimetiere);

//Sangoku
doctor.patientIn(sangoku);

doctor.diagnostique(sangoku);

doctor.patientOut(sangoku);

sangoku.takeCare();
console.log(sangoku);
console.log(cimetiere);

//darthVader
doctor.patientIn(darthVader);

doctor.diagnostique(darthVader);

doctor.patientOut(darthVader);

darthVader.takeCare();
console.log(darthVader);
console.log(cimetiere);

//semicolon
doctor.patientIn(semicolon);

doctor.diagnostique(semicolon);

doctor.patientOut(semicolon);

semicolon.takeCare();
console.log(semicolon);
console.log(cimetiere);