var counter = 0;
var counterElement = document.querySelector("div");
var buttonElement = document.querySelector("#click");
var resetElement = document.querySelector("#reset");

function incrementCounter() {
    counter++;
    counterElement.innerText = counter;
}

function resetCounter() {
    counter = 0;
    counterElement.innerText = counter;
}


resetCounter();

buttonElement.addEventListener("click", function onClick() {
    incrementCounter();
});

resetElement.addEventListener("click", function onClick() {
    resetCounter();
});