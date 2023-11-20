/*
papier2 > pierre1
pierre1 > ciseaux0
ciseaux0 > papier2

let playerComputer1
let playerComputer2
let playerUser

playerUser peut sélectionner soit Pierre ou Feuille ou Ciseaux

Un tableau regroupant Pierre ou Feuille ou Ciseaux.
Une fonction qui génére un nombre aléatoire entre 0 et 2 qui correspondra à l'index des éléments du tableau.



*/
"use strict"

const choiceArray = ["pierre", "feuille", "ciseaux"]

class Player {
    constructor(name) {
        this.name = name;
        this.choice = "";
        this.score = 0;
    }
    choiceRandom() {
        let nbIndex = Math.floor(Math.random() * 3);
        return this.choice = choiceArray[nbIndex]
    }
}

const computer1 = new Player("computer1");
const computer2 = new Player("computer2");
const user = new Player("user");

let message;

computer1.choiceRandom();
computer2.choiceRandom();

console.log(computer1.choice);
console.log(computer2.choice);

