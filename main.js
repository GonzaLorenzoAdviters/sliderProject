let index = 1;
function* Index()
{
    while(index < 3) yield index++; 
} 

const generator = Index();

let slides = document.getElementsByClassName("carousel-slide");
let currentSlide;
let previousSlide;

InitCarousel();

function NextSlide()
{
    if(currentSlide === 2)
    {
        slides[currentSlide].style.display ="none";
        currentSlide = 1;
        InitCarousel();
    }
    else{
        ShowSlide();
    }
   
}

function ShowSlide()
{
    console.log(currentSlide);

    currentSlide = generator.next().value;

    slides[previousSlide].style.display ="none";
    slides[currentSlide].style.display = "block";

    previousSlide = currentSlide;


}

function InitCarousel()
{
    index = 1;
    slides[0].style.display = "block";
    previousSlide = 0;
}