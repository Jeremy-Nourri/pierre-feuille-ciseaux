"use strict"

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
        this.avatar = "";
    }
    choiceRandom() {
        let nbIndex = Math.floor(Math.random() * 3);
        return this.choice = choiceArray[nbIndex];
    }
}

/////////// INSTANCES
const computer1 = new Player();
computer1.nickname = "Pauline";
computer1.avatar = "./img/avatar-p.png";

const computer2 = new Player();
computer2.nickname = "Mehdi";
computer2.avatar = "./img/avatar-m.png";

const user = new Player();

 /////////////// Function to add element in DOM with class name attributes 
const createElemWithClass = (tag, className, parent) => {
    const elem = document.createElement(tag);
    elem.setAttribute("class", className);
    parent.appendChild(elem);
    return elem;
};

    /////////////// Function to add element in DOM with class name attributes and text content
const createElemWithClassAndText = (tag, className, parent, text) => {
    const element = document.createElement(tag);
    element.className = className;
    element.textContent = text;
    parent.appendChild(element);
    return element;
}


const saveUserNameAndAvatar = () => {
    user.nickname = document.getElementById("name-user").value;
    const selectedRadio = document.querySelector('input[name="avatars"]:checked');
    user.avatar = `./img/${selectedRadio.id}.png`;
}


document.addEventListener("DOMContentLoaded", () => {

    const mainElem = document.querySelector("main");

    /////////////// Form to set user's nickname ///////////////
    const formContainer = document.querySelector(".container-form");
    const formElement = document.querySelector(".index-form");

    const containerMessage = document.createElement("div");
    containerMessage.classList.add("message-container");


    /////////////// Handler Form Submit ///////////////
    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        saveUserNameAndAvatar();

        createElemWithClassAndText("p", "message-name", containerMessage, `Bonjour ${user.nickname} ! Es-tu prêt(e) à jouer ?`);

        const buttonPlay = createElemWithClassAndText("button", "message-button", containerMessage, "Commencer une partie");
        buttonPlay.addEventListener("click", createUserChoicePage);

        formContainer.replaceChild(containerMessage, formElement);
    });

    const createUserChoicePage = () => {
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
            subIcon.addEventListener("click", saveAndDisplayPlayersChoices);
        }
    }

    /////////////// Functions used in the view that displays player's choices ///////////////

    const createPlayersChoicesItems = (player, containerChoiceUser) => {
        const subContainer = createElemWithClass("div", "container-choice-user__sub", containerChoiceUser);
        createElemWithClassAndText("p", "sub__name-elem", subContainer, `${player.nickname} a sélectionné l'élément :`);

        const divAvatarIcon = createElemWithClass("div", "sub__div-avatar-icon", subContainer);

        const avatar = createElemWithClass("img", "avatar", divAvatarIcon);
        avatar.setAttribute("src", player.avatar);

        const divIconName = createElemWithClass("div", "div-icon-name", divAvatarIcon);
        createElemWithClassAndText("div", "div-avatar-icon__icon", divIconName, choiceObj[player.choice]);
        createElemWithClassAndText("p", "div-avatar-icon__elem", divIconName, player.choice);
    }
    
    const createPlayersChoicesPage = () => {
        document.querySelector(".container-choice-user").remove();
        const containerChoiceUser = createElemWithClass("div", "container-choice-user", mainElem);
        const loader = createElemWithClass("img","loader", containerChoiceUser);
        loader.setAttribute("src", "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExajcybTFxdXRodjlxcnR2eXRyMjJkcGo0Mmh3MXp2d3o1MHFuNnY1dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MIlFrmkPJDvec6qSzl/giphy.gif")

        setTimeout(() => {
            document.querySelector(".container-choice-user").remove();
            const containerChoiceUser = createElemWithClass("div", "container-choice-user", mainElem);

            createPlayersChoicesItems(computer1, containerChoiceUser);
            createPlayersChoicesItems(computer2, containerChoiceUser);
            createPlayersChoicesItems(user, containerChoiceUser);
            createElemWithClassAndText("button", "button-results", containerChoiceUser, "Afficher les résultats");

            const buttonDisplayResultats = document.querySelector(".button-results");
            buttonDisplayResultats.addEventListener("click", createResultsPage);

        }, 2000);
    }

    const saveAndDisplayPlayersChoices = (event) => {

        user.choice = event.target.id;
        computer1.choiceRandom();
        computer2.choiceRandom();
        console.log(user.choice);

        createPlayersChoicesPage();
    }

    const createResultsItem = (player, containerResults) => {

        const subContainerResults = createElemWithClass("div", "container-choice-user__sub", containerResults);
        createElemWithClassAndText("p", "sub__name-elem", subContainerResults, player.nickname);
    
        const containerAvatarIcon = createElemWithClass("div", "sub__div-avatar-icon", subContainerResults);
    
        const avatarPlayer = createElemWithClass("img", "avatar", containerAvatarIcon);
        avatarPlayer.setAttribute("src", player.avatar);
    
        const iconName = createElemWithClass("div", "div-icon-name", containerAvatarIcon);
        createElemWithClassAndText("p", "div-avatar-icon__score", iconName, player.score);
    }

    const createResultsPage = () => {
        
        compareChoices();
        document.querySelector(".container-choice-user").remove();
        const containerResults = createElemWithClass("div", "container-choice-user", mainElem);

        createElemWithClassAndText("p", "message", containerResults, message);
        createResultsItem(computer1, containerResults);
        createResultsItem(computer2, containerResults);
        createResultsItem(user, containerResults);
        createElemWithClassAndText("button", "button-results", containerResults, "Afficher les résultats");
    }

    let message;

    const compareChoices = () => {
        
        if (user.choice === computer1.choice && user.choice === computer2.choice && computer1.choice === computer2.choice) {
            message = "Égalité, aucun joueur ne marque de point"
        }

        if (user.choice === "pierre") {
            if (computer1.choice === "feuille" && computer2.choice === "ciseaux" || computer1.choice === "ciseaux" && computer2.choice === "feuille") {
                message = "Tout le monde gagne un point !";
                ++computer1.score;
                ++computer2.score;
                ++user.score;
            }
            else if (computer1.choice === "pierre" && computer2.choice === "ciseaux") {
                message = `Vous et ${computer1.nickname} gagnez un point !`;
                ++computer1.score;
                ++user.score;
            }
            else if (computer1.choice === "ciseaux" && computer2.choice === "pierre") {
                message = `Vous et ${computer2.nickname} gagnez un point !`;
                ++computer2.score;
                ++user.score;
            }
            else if (computer1.choice === "feuille" && computer2.choice === "feuille") {
                message = `${computer1.nickname} et ${computer2.nickname} gagnent un point !`;
                ++computer1.score;
                ++computer2.score;
            }
            else if (computer1.choice === "ciseaux" && computer2.choice === "ciseaux") {
                message = "Vous gagnez deux points !";
                user.score +=2;
            }
            else if (computer1.score === "pierre" && computer2.score === "feuille") {
                message = `${computer2.nickname} gagne deux points !`;
                computer2.score += 2;
            }
            else if (computer1.score === "feuille" && computer2.score === "pierre") {
                message = `${computer1.nickname} gagne deux points !`;
                computer1.score += 2;
            }
        }

        else if (user.choice === "feuille") {
            if (computer1.choice === "pierre" && computer2.choice === "ciseaux" || computer1.choice === "ciseaux" && computer2.choice === "pierre") {
                message = "Tout le monde gagne un point !";
                ++computer1.score;
                ++computer2.score;
                ++user.score;
            }
            else if (computer1.choice === "feuille" && computer2.choice === "ciseaux") {
                message = `${computer2.nickname} gagnent deux points !`;
                computer2.score += 2;
            }
            else if (computer1.choice === "ciseaux" && computer2.choice === "feuille") {
                message = `${computer1.nickname} gagne deux points !`;
                computer1.score += 2;
            }
            else if (computer1.choice === "feuille" && computer2.choice === "pierre") {
                message = `Vous et ${computer1.nickname} gagnez un point !`;
                ++computer1.score;
                ++user.score;
            }
            else if (computer1.choice === "pierre" && computer2.choice === "feuille") {
                message = `Vous et ${computer2.nickname} gagnez un point !`;
                ++computer2.score;
                ++user.score;
            }
            else if (computer1.choice === "ciseaux" && computer2.choice === "ciseaux") {
                message = `${computer1.nickname} et ${computer2.nickname} gagnent un point !`;
                ++computer1.score;
                ++computer2.score;
            }
            else if (computer1.choice === "pierre" && computer2.choice === "pierre") {
                message = "Vous gagnez deux points !";
                user.score += 2;
            }

        }

        else if (user.choice === "ciseaux") {
            if (computer1.choice === "pierre" && computer2.choice === "feuille" || computer1.choice === "feuille" && computer2.choice === "pierre") {
                message = "Tout le monde gagne un point !";
                ++computer1.score;
                ++computer2.score;
                ++user.score;
            }
            else if (computer1.choice === "feuille" && computer2.choice === "ciseaux") {
                message = `Vous et ${computer2.nickname} gagnez un point !`;
                ++computer2.score;
                ++user.score;
            }
            else if (computer1.choice === "ciseaux" && computer2.choice === "feuille") {
                message = `Vous et ${computer1.nickname} gagnez un point !`;
                ++computer1.score;
                ++user.score;
            }
            else if (computer1.choice === "ciseaux" && computer2.choice === "pierre") {
                message = `${computer2.nickname} gagne deux points !`;
                computer2.score += 2;
            }
            else if (computer1.choice === "pierre" && computer2.choice === "ciseaux") {
                message = `${computer1.nickname} gagne deux points !`;
                computer1.score += 2;
            }
            else if (computer1.choice === "feuille" && computer2.choice === "feuille") {
                message = "Vous gagnez deux points !";
                user.score += 2;
            }
            else if (computer1.choice === "pierre" && computer2.choice === "pierre") {
                message = `${computer1.nickname} et ${computer2.nickname} gagnent un point !`;
                ++computer1.score;
                ++computer2.score;
            }
        }
    }

});



