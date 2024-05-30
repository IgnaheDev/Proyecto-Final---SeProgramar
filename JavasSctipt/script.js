const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".sliderSection");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btnLeft");
const btnRight = document.querySelector("#btnRight");

slider.insertAdjacentElement("afterbegin", sliderSectionLast);

function nextAction(){
    let sliderSectionFirst = document.querySelectorAll(".sliderSection")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 1s";
    setTimeout( function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", sliderSectionFirst);
        slider.style.marginLeft = "-100%";
     }, 1000);
}

function previusAction(){
    let sliderSection = document.querySelectorAll(".sliderSection");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 1s";
    setTimeout( function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin", sliderSectionLast);
        slider.style.marginLeft = "-100%";
     }, 1000);
}

btnRight.addEventListener("click", function(){
    nextAction();
});

btnLeft.addEventListener("click", function(){
    previusAction();
});
