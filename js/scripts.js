const stamp = document.querySelector("#stamp");
const heartBeatsCounter = document.querySelector("#hb-counter");
const lidOne = document.querySelector("#lid-one");
const lidTwo = document.querySelector("#lid-two");
const letterContent = document.querySelector("#letter-content");
let heartBeats = 5;

stamp.addEventListener("click", () => {
    heartBeats--;
    heartBeatsCounter.textContent = heartBeats;
    if(heartBeats <= 0){
        heartBeatsCounter.style.display = "none";
        lidOne.style.transform = "rotateX(90deg)";
        lidOne.style.transitionDelay = "0s";
        lidTwo.style.transform = "rotateX(180deg)";
        lidTwo.style.transitionDelay = "0.25s";
        letterContent.style.transform = "translateY(-270px)";
        letterContent.style.transitionDelay = "0.5s";
        setTimeout(() => {
            letterContent.style.zIndex = "4";
        }, 500);
        setTimeout(() => {
            letterContent.style.transform = "translateY(0px)";
        }, 1000);
    } else {
        stamp.style.transform = "scale(1.2)";
        setTimeout(() => {
            stamp.style.transform = "scale(1)";
        }, 150);
    }
});