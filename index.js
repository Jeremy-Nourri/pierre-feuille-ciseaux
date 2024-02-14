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
const computer1 = new Player();
const computer2 = new Player();
const user = new Player();

document.addEventListener("DOMContentLoaded", () => {


function savePlayersName() {
    user.nickname = document.getElementById("name-user").value;
    computer1.nickname = "Pauline";
    computer2.nickname = "Mehdi";
}

// function displayName(userId, nickname) {
//     const container = document.getElementById(userId);
//     container.textContent = nickname;
// }

function redirectToChoicePage() {
    window.location.href = "./choice/choice.html";
}

const formContainer = document.querySelector(".container-form");
const formElement = document.querySelector(".index-form");

console.log(formElement);

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    savePlayersName();

    const messageName = document.createElement("p");
    messageName.classList.add("message-name");
    messageName.textContent = `Bonjour ${user.nickname} ! Es-tu prêt à jouer ?`
    
    const buttonPlay = document.createElement("button");
    buttonPlay.classList.add("message-button");
    buttonPlay.textContent = "Commencer une partie";
    buttonPlay.addEventListener("click", redirectToChoicePage)

    const containerMessage = document.createElement("div");
    containerMessage.classList.add("message-container");

    containerMessage.appendChild(messageName);
    containerMessage.appendChild(buttonPlay);
    formContainer.replaceChild(containerMessage, formElement);

});
});

// let message;


// const compareChoices = () => {
//     if (user.choice === computer1.choice && user.choice === computer2.choice && computer1.choice === computer2.choice) {
//         message = "Égalité, aucun joueur ne marque de point"
//     }

//     if (userChoice === "pierre") {
//         if (computer1.choice === "feuille" && computer2.choice === "ciseaux" || computer1.choice === "ciseaux" && computer2.choice === "feuille") {
//             message = "Tout le monde gagne un point !";
//             ++computer1.score;
//             ++computer2.score;
//             ++user.score;
//         }
//         else if (computer1.choice === "pierre" && computer2.choice === "ciseaux") {
//             message = `Vous et ${computer1.nickname} gagnez un point !`;
//             ++computer1.score;
//             ++user.score;
//         }
//         else if (computer1.choice === "ciseaux" && computer2.choice === "pierre") {
//             message = `Vous et ${computer2.nickname} gagnez un point !`;
//             ++computer2.score;
//             ++user.score;
//         }
//         else if (computer1.choice === "feuille" && computer2.choice === "feuille") {
//             message = `${computer1.nickname} et ${computer2.nickname} gagnent un point !`;
//             ++computer1.score;
//             ++computer2.score;
//         }
//         else if (computer1.choice === "ciseaux" && computer2.choice === "ciseaux") {
//             message = "Vous gagnez deux points !";
//             user.score +=2;
//         }
//         else if (computer1.score === "pierre" && computer2.score === "feuille") {
//             message = `${computer2.nickname} gagne deux points !`;
//             computer2.score += 2;
//         }
//         else if (computer1.score === "feuille" && computer2.score === "pierre") {
//             message = `${computer1.nickname} gagne deux points !`;
//             computer1.score += 2;
//         }
//     }

//     else if (userChoice === "feuille") {
//         if (computer1.choice === "pierre" && computer2.choice === "ciseaux" || computer1.choice === "ciseaux" && computer2.choice === "pierre") {
//             message = "Tout le monde gagne un point !";
//             ++computer1.score;
//             ++computer2.score;
//             ++user.score;
//         }
//         else if (computer1.choice === "feuille" && computer2.choice === "ciseaux") {
//             message = `${computer2.nickname} gagnent deux points !`;
//             computer2.score += 2;
//         }
//         else if (computer1.choice === "ciseaux" && computer2.choice === "feuille") {
//             message = `${computer1.nickname} gagne deux points !`;
//             computer1.score += 2;
//         }
//         else if (computer1.choice === "feuille" && computer2.choice === "pierre") {
//             message = `Vous et ${computer1.nickname} gagnez un point !`;
//             ++computer1.score;
//             ++user.score;
//         }
//         else if (computer1.choice === "pierre" && computer2.choice === "feuille") {
//             message = `Vous et ${computer2.nickname} gagnez un point !`;
//             ++computer2.score;
//             ++user.score;
//         }
//         else if (computer1.choice === "ciseaux" && computer2.choice === "ciseaux") {
//             message = `${computer1.nickname} et ${computer2.nickname} gagnent un point !`;
//             ++computer1.score;
//             ++computer2.score;
//         }
//         else if (computer1.choice === "pierre" && computer2.choice === "pierre") {
//             message = "Vous gagnez deux points !";
//             user.score += 2;
//         }

//     }

//     else if (userChoice === "ciseaux") {
//         if (computer1.choice === "pierre" && computer2.choice === "feuille" || computer1.choice === "feuille" && computer2.choice === "pierre") {
//             message = "Tout le monde gagne un point !";
//             ++computer1.score;
//             ++computer2.score;
//             ++user.score;
//         }
//         else if (computer1.choice === "feuille" && computer2.choice === "ciseaux") {
//             message = `Vous et ${computer2.nickname} gagnez un point !`;
//             ++computer2.score;
//             ++user.score;
//         }
//         else if (computer1.choice === "ciseaux" && computer2.choice === "feuille") {
//             message = `Vous et ${computer1.nickname} gagnez un point !`;
//             ++computer1.score;
//             ++user.score;
//         }
//         else if (computer1.choice === "ciseaux" && computer2.choice === "pierre") {
//             message = `${computer2.nickname} gagne deux points !`;
//             computer2.score += 2;
//         }
//         else if (computer1.choice === "pierre" && computer2.choice === "ciseaux") {
//             message = `${computer1.nickname} gagne deux points !`;
//             computer1.score += 2;
//         }
//         else if (computer1.choice === "feuille" && computer2.choice === "feuille") {
//             message = "Vous gagnez deux points !";
//             user.score += 2;
//         }
//         else if (computer1.choice === "pierre" && computer2.choice === "pierre") {
//             message = `${computer1.nickname} et ${computer2.nickname} gagnent un point !`;
//             ++computer1.score;
//             ++computer2.score;
//         }
//     }
// }