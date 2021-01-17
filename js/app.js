const body = document.querySelector('body');

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

window.onload = () => {
    let imageNumber = getRndInteger(1, 3);

    body.style.backgroundImage = `url("/images/bg_${imageNumber}.jpg")`;
    console.log(imageNumber);
}

function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

docReady( () => {
    const loader = document.querySelector('#loader');

    loader.style.animation = "fadeIt 1.5s ease 1s forwards";
    setTimeout( () => {
        loader.style.display = "none";
        loader.style.visibility = "hidden";
        loader.style.zIndex = "-999";
    }, 2500);
});