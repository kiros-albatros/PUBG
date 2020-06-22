let languageArrow = document.querySelector(".language__arrow");
let languagesList = document.querySelector(".languages__selector");
languageArrow.addEventListener("click", function () {
    languagesList.classList.toggle("show-languages");
})

//game
let mainButton = document.querySelector(".main__button");
let mainContainer = document.querySelector(".main-container");
let gameMode = false;
let body = document.querySelector("body");
let audio = document.querySelector("#audio")

mainButton.addEventListener("click", function () {
    mainContainer.classList.add("game");
    gameMode = true;
})

mainContainer.addEventListener("click", function (event) {
    if (gameMode == true) {
        let bullet = document.createElement("span");
        bullet.classList.add("hole");
        if (document.body.clientWidth < 780) {
            var x = event.pageX - 18;
            var y = event.pageY - 18;
        } else {
            var x = event.pageX + 28;
            var y = event.pageY + 28;
        }
        bullet.style.left = x + 'px';
        bullet.style.top = y + 'px';
        audio.play();
        body.appendChild(bullet);
    }
})