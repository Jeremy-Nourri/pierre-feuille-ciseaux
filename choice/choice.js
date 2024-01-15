function getUserName() {

    const nickname = localStorage.getItem("userName");
    const pUserName = document.querySelector(".container-choice-user__name");
    console.log(pUserName);
    console.log(nickname);
    if (nickname && pUserName) {
        pUserName.textContent = "Bienvenue, " + nickname + "!";
    } else {
        console.error("Le nom d'utilisateur n'est pas défini ou l'élément HTML n'a pas été trouvé.");
    }
}

getUserName();