"use strict"

/////////// INITIALISATION OF VARIABLES ///////////////

const choiceObj = {
    pierre: "✊",
    feuille: "✋",
    ciseaux: "✌️"
}

const choiceArray = Object.keys(choiceObj);
const iconsArray = Object.values(choiceObj);

/////////// CLASS
class Player {
    constructor() {
        this.nickname = "";
        this.choice = "";
        this.score = 0;
    }
    choiceRandom() {
        let nbIndex = Math.floor(Math.random() * 3);
        return this.choice = choiceArray[nbIndex];
    }
}

/////////// INSTANCES
const computer1 = new Player();
const computer2 = new Player();
const user = new Player();


document.addEventListener("DOMContentLoaded", () => {

    const mainElem = document.querySelector("main");
    const formContainer = document.querySelector(".container-form");

    /////////////// function to add element in DOM with class name attributes 
    const createElemWithClass = (tag, className, parent) => {
        const elem = document.createElement(tag);
        elem.setAttribute("class", className);
        parent.appendChild(elem);
        return elem;
    };

    /////////////// function to add element in DOM with class name attributes and text content
    const createElemWithClassAndText = (tag, className, parent, text) => {
        const element = document.createElement(tag);
        element.className = className;
        element.textContent = text;
        parent.appendChild(element);
        return element;
    }

    const savePlayersName = () => {
        user.nickname = document.getElementById("name-user").value;
        computer1.nickname = "Pauline";
        computer2.nickname = "Mehdi";
    }

    const createPlayersChoicesItems = (player, containerChoiceUser) => {
        const subContainer = createElemWithClass("div", "container-choice-user__sub", containerChoiceUser);
        createElemWithClassAndText("p", "sub__name-elem", subContainer, `${player.nickname} a sélectionné l'élément :`);
        createElemWithClassAndText("div", "sub__icon sub__icon--players", subContainer, choiceObj[player.choice]);
        createElemWithClassAndText("p", "sub__name", subContainer, player.choice);
    }
    
    const createPlayersResultsContainer = () => {
        document.querySelector(".container-choice-user").remove();
        const containerChoiceUser = createElemWithClass("div", "container-choice-user", mainElem);
        createPlayersChoicesItems(computer1, containerChoiceUser);
        createPlayersChoicesItems(computer2, containerChoiceUser);
        createPlayersChoicesItems(user, containerChoiceUser);
    }

    const saveAndDisplayPlayersChoice = (event) => {
        user.choice = event.target.id;
        computer1.choiceRandom();
        computer2.choiceRandom();
        console.log(user.choice);
        createPlayersResultsContainer();
    }

    const createUserChoicesContainer = () => {

        const articleElem = document.querySelector("article");

        articleElem.remove();
        formContainer.remove();

        const containerChoiceUser = createElemWithClass("div", "container-choice-user", mainElem);
        createElemWithClassAndText("p", "container-choice-user__name", containerChoiceUser, user.nickname);
        createElemWithClassAndText("p", "container-choice-user__info", containerChoiceUser, "Sélectionne un élément");

        for (let i = 0; i < 3; i++) {
            const subContainer = createElemWithClass("div", "container-choice-user__sub", containerChoiceUser);
            const subIcon = createElemWithClassAndText("div", "sub__icon", subContainer, iconsArray[i]);
            subIcon.setAttribute("id", choiceArray[i]);
            createElemWithClassAndText("p", "sub__name-elem", subContainer, choiceArray[i]);
            subIcon.addEventListener("click", saveAndDisplayPlayersChoice);
        }
    }

    const containerMessage = document.createElement("div");
    containerMessage.classList.add("message-container");

    const formElement = document.querySelector(".index-form");

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        savePlayersName();

        createElemWithClassAndText("p", "message-name", containerMessage, `Bonjour ${user.nickname} ! Es-tu prêt à jouer ?`);

        const buttonPlay = createElemWithClassAndText("button", "message-button", containerMessage, "Commencer une partie");
        buttonPlay.addEventListener("click", createUserChoicesContainer);

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