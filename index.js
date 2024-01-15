"use strict"

const choiceArray = ["pierre", "feuille", "ciseaux"]

class Player {
    constructor() {
        this.nickname = "";
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

const compareChoice = (userChoice) => {
    if (user.choice === computer1.choice && user.choice === computer2.choice && computer1.choice === computer2.choice) {
        message = "Égalité, aucun joueur ne marque de point"
    }

    if (userChoice === "pierre") {
        if (computer1.choice === "feuille" && computer2.choice === "ciseaux" || computer1.choice === "ciseaux" && computer2.choice === "feuille") {
            message = "Tout le monde gagne un point !";
            ++computer1.score;
            ++computer2.score;
            ++user.score;
        }
        else if (computer1.choice === "pierre" && computer2.choice === "ciseaux") {
            message = "Vous et computer1 gagnez un point !";
            ++computer1.score;
            ++user.score;
        }
        else if (computer1.choice === "ciseaux" && computer2.choice === "pierre") {
            message = "Vous et computer2 gagnez un point !";
            ++computer2.score;
            ++user.score;
        }
        else if (computer1.choice === "feuille" && computer2.choice === "feuille") {
            message = "Computer1 et computer2 gagnent un point !";
            ++computer1.score;
            ++computer2.score;
        }
        else if (computer1.choice === "ciseaux" && computer2.choice === "ciseaux") {
            message = "Vous gagnez deux points !";
            user.score +=2;
        }
        else if (computer1.score === "pierre" && computer2.score === "feuille") {
            message = "Computer2 gagne deux points !";
            computer2.score += 2;
        }
        else if (computer1.score === "feuille" && computer2.score === "pierre") {
            message = "Computer1 gagne deux points !";
            computer1.score += 2;
        }
    }

    else if (userChoice === "feuille") {
        if (computer1.choice === "pierre" && computer2.choice === "ciseaux" || computer1.choice === "ciseaux" && computer2.choice === "pierre") {
            message = "Tout le monde gagne un point !";
            ++computer1.score;
            ++computer2.score;
            ++user.score;
        }
        else if (computer1.choice === "feuille" && computer2.choice === "ciseaux") {
            message = "Computer2 gagnent deux points !";
            computer2.score += 2;
        }
        else if (computer1.choice === "ciseaux" && computer2.choice === "feuille") {
            message = "Computer1 gagne deux points !";
            computer1.score += 2;
        }
        else if (computer1.choice === "feuille" && computer2.choice === "pierre") {
            message = "Vous et computer1 gagnez un point !";
            ++computer1.score;
            ++user.score;
        }
        else if (computer1.choice === "pierre" && computer2.choice === "feuille") {
            message = "Vous et computer2 gagnez un point !";
            ++computer2.score;
            ++user.score;
        }
        else if (computer1.choice === "ciseaux" && computer2.choice === "ciseaux") {
            message = "Computer1 et computer2 gagnent un point !";
            ++computer1.score;
            ++computer2.score;
        }
        else if (computer1.choice === "pierre" && computer2.choice === "pierre") {
            message = "Vous gagnez deux points !";
            user.score += 2;
        }

    }

    else if (userChoice === "ciseaux") {
        if (computer1.choice === "pierre" && computer2.choice === "feuille" || computer1.choice === "feuille" && computer2.choice === "pierre") {
            message = "Tout le monde gagne un point !";
            ++computer1.score;
            ++computer2.score;
            ++user.score;
        }
        else if (computer1.choice === "feuille" && computer2.choice === "ciseaux") {
            message = "Vous et computer2 gagnez un point !";
            ++computer2.score;
            ++user.score;
        }
        else if (computer1.choice === "ciseaux" && computer2.choice === "feuille") {
            message = "Vous et computer1 gagnez un point !";
            ++computer1.score;
            ++user.score;
        }
        else if (computer1.choice === "ciseaux" && computer2.choice === "pierre") {
            message = "Computer2 gagne deux points !";
            computer2.score += 2;
        }
        else if (computer1.choice === "pierre" && computer2.choice === "ciseaux") {
            message = "Computer1 gagne deux points !";
            computer1.score += 2;
        }
        else if (computer1.choice === "feuille" && computer2.choice === "feuille") {
            message = "Vous gagnez deux points !";
            user.score += 2;
        }
        else if (computer1.choice === "pierre" && computer2.choice === "pierre") {
            message = "Computer1 et computer2 gagnent un point !";
            ++computer1.score;
            ++computer2.score;
        }
    }
}

function saveUserName(event) {
    event.preventDefault();
    user.nickname = document.getElementById("name-user").value;
    console.log(user.nickname);
    localStorage.setItem("userName", user.nickname);
    window.location.href = "choice/choice.html";
}

