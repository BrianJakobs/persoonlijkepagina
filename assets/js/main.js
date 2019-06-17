var allArticles = document.querySelectorAll("article"),
    i,
    notSelected = document.querySelectorAll("article:not(.show)"),
    i,
    articlesShown = document.querySelectorAll("article .show"),
    i;

function allesUit() {
    "use strict";
    return Array.from(document.querySelectorAll("input[type='checkbox']")).every(x => !x.checked);
}

function hideNotSelected() {
    for (i = 0; i < notSelected.length; ++i) {
        notSelected[i].classList.add("hide");
    }
}

//show period1
var periodOneItems = document.querySelectorAll(".periodOne"),
    i;

document.querySelector("li #period1").addEventListener("click", function () {
    "use strict";
    for (i = 0; i < periodOneItems.length; ++i) {
        periodOneItems[i].classList.toggle("show");
        console.log("periode 1 is geselecteerd");
    }
    hideNotSelected();
    console.log("alles dat niet show heeft krijgt nu hide");
    if (allesUit()) {
        Array.from(document.querySelectorAll("article")).forEach(article => {
            if (article.classList.contains("hide")) {
                article.classList.remove("hide");
            }
        });
    }
    console.log(allesUit());
});

//show period2
var periodTwoItems = document.querySelectorAll(".periodTwo"),
    i;

document.querySelector("li #period2").addEventListener("click", function () {
    "use strict";
    for (i = 0; i < periodTwoItems.length; ++i) {
        periodTwoItems[i].classList.toggle("show");
        console.log("periode 2 is geselecteerd");
    }
    hideNotSelected();
    if (allesUit()) {
        Array.from(document.querySelectorAll("article")).forEach(article => {
            if (article.classList.contains("hide")) {
                article.classList.remove("hide");
            }
        });
    }
});

//show period3
var periodThreeItems = document.querySelectorAll(".periodThree"),
    i;

document.querySelector("li #period3").addEventListener("click", function () {
    "use strict";
    for (i = 0; i < periodThreeItems.length; ++i) {
        periodThreeItems[i].classList.toggle("show");
        console.log("periode 3 is geselecteerd");
    }
    hideNotSelected();
    if (allesUit()) {
        Array.from(document.querySelectorAll("article")).forEach(article => {
            if (article.classList.contains("hide")) {
                article.classList.remove("hide");
            }
        });
    }
});