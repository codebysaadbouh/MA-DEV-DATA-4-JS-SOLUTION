let calculChoice
let firstDigit
let secondDigit


/**
 * Afficher un menu à notre utilisateur, comportant les 4 modes que nous lui proposons :
 * 1- addition
 * 2- soustraction
 * 3- multiplication
 * 4- division 
 */

do {
    calculChoice = prompt("Choisissez votre mode de calcul : \n 1- Addition \n 2- Soustraction \n 3- Multiplication \n 4- Division");
    console.log(`calculChoice = ${calculChoice}`);
}while(isNaN(calculChoice) || calculChoice != 1 && calculChoice != 2 && calculChoice != 3 && calculChoice != 4);    



/**
 * Demander à l'utilisateur de saisir 2 nombres
 */

do {
    numberOne = parseInt(prompt("Entrez le premier nombre"));
    numberTwo = parseInt(prompt("Entrez le deuxième nombre"));
    console.log(`numberOne = ${numberOne}`);
    console.log(`numberTwo = ${numberTwo}`);
} while (isNaN(numberOne) || isNaN(numberTwo));



/**
 * Les fonctions d'addition, de soustraction, de multiplication et de division sont définies
 */

function addition(numberOne, numberTwo) {
    let result = numberOne + numberTwo;
    return result;
}

function multiplication(numberOne, numberTwo) {
    let result = numberOne * numberTwo;
    return result;
}

function soustraction(numberOne, numberTwo) {
    let result = numberOne - numberTwo;
    return result;
}

function division(numberOne, numberTwo) {
    if (numberTwo == 0) {
        throw new Error("Division par 0 impossible !");
    }
    let result = numberOne / numberTwo;
    return result;
}


// Appel à la fonction à utiliser en fonction du choix de l'utilisateur

try {
    switch (calculChoice) {
    
    case '1':
        alert(`Le resulat de l'addition est ${addition(numberOne, numberTwo)}`);
        break;
    
    case '2':
        alert(`Le resulat de la soustraction est ${soustraction(numberOne, numberTwo)}`);
        break;
    
    case '3':
        alert(`Le resulat de la multiplication est ${multiplication(numberOne, numberTwo)}`);
        break;
    
    case '4':
        try {
            alert(`Le resulat de la division est ${division(numberOne, numberTwo)}`);
        } catch (error) {
            alert(error.message);
        }
        break;
    
    default:
        alert("Une erreur est survenue");
}
} catch (error) {
    alert(error.message);
}