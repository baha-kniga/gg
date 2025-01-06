const squares = document.querySelectorAll(".square");

let main = true;
let game = false;
let stories = false;
let poetry = false;

function toMain() {
    if (game === true){
        game = false;
        squares.forEach(element => {
            element.style.animation="gameToMain 5s 1";
        });
        setTimeout(function(){
            squares.forEach(element => {
                element.style.transform="translateX(0)";
            });
            main = true;
        }, 5000);
    }
    if (stories === true){
        stories = false;
        squares.forEach(element => {
            element.style.animation="storiesToMain 5s 1";
        });
        setTimeout(function(){
            squares.forEach(element => {
                element.style.transform="translateX(0)";
            });
            main = true;
        }, 5000);
    }
    if (poetry === true){
        poetry = false;
        squares.forEach(element => {
            element.style.animation="poetryToMain 5s 1";
        });
        setTimeout(function(){
            squares.forEach(element => {
                element.style.transform="translateX(0)";
            });
            main = true;
        }, 5000);
    }
}

function toGame() {
    if (main === true){
        main = false;
        squares.forEach(element => {
            element.style.animation = "mainToGame 5s 1";
        });
        setTimeout(function(){
            squares.forEach(element => {
                element.style.transform = "translateX(-100vw)";
            });
            game = true;
        }, 5000);
    }
    if (stories === true){
        stories = false;
        squares.forEach(element => {
            element.style.animation = "storiesToGame 5s 1";
        });
        setTimeout(function(){
            squares.forEach(element => {
                element.style.transform = "translateX(-100vw)";
            });
            game = true;
        }, 5000);
    }
    if (poetry === true){
        poetry = false;
        squares.forEach(element => {
            element.style.animation = "poetryToGame 5s 1";
        });
        setTimeout(function(){
            squares.forEach(element => {
                element.style.transform = "translateX(-100vw)";
            });
            game = true;
        }, 5000);
    }
}

function toStories() {
    if (main === true){
        main = false;
        squares.forEach(element => {
            element.style.animation="mainToStories 5s 1";
        });
        setTimeout(function(){
            squares.forEach(element => {
                element.style.transform="translateX(-200vw)";
            });
            stories = true;
        }, 5000);
    }
    if (game === true){
        game = false;
        squares.forEach(element => {
            element.style.animation="gameToStories 5s 1";
        });
        setTimeout(function(){
            squares.forEach(element => {
                element.style.transform="translateX(-200vw)";
            });
            stories = true;
        }, 5000);
    }
    if (poetry === true){
        poetry = false;
        squares.forEach(element => {
            element.style.animation="poetryToStories 5s 1";
        });
        setTimeout(function(){
            squares.forEach(element => {
                element.style.transform="translateX(-200vw)";
            });
            stories = true;
        }, 5000);
    }
}
function toPoetry() {
    if (main === true){
        main = false;
        squares.forEach(element => {
            element.style.animation="mainToPoetry 5s 1";
        });
        setTimeout(function(){
            squares.forEach(element => {
                element.style.transform="translateX(-300vw)";
            });
            poetry = true;
        }, 5000);
    }
    if (game === true){
        game = false;
        squares.forEach(element => {
            element.style.animation="gameToPoetry 5s 1";
        });
        setTimeout(function(){
            squares.forEach(element => {
                element.style.transform="translateX(-300vw)";
            });
            poetry = true;
        }, 5000);
    }
    if (stories === true){
        stories = false;
        squares.forEach(element => {
            element.style.animation="storiesToPoetry 5s 1";
        });
        setTimeout(function(){
            squares.forEach(element => {
                element.style.transform="translateX(-300vw)";
            });
            poetry = true;
        }, 5000);
    }
}
