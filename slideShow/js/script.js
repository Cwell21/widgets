//IIFE function to keep global scope clean and initialize show
(function initShow() {

  //DOM ELEMENTS
  const elSlide = document.getElementsByClassName("slide");
  const elContainer = document.getElementById("container");

  //CREATE SLIDES
  let createSlide = (slide) => {
    
    let slideLeft = 0;
    slide.map(pic => {
      let elImage = document.createElement("img");
      elImage.setAttribute("src", pic);
      elImage.setAttribute("alt", "Slide Image");
      elImage.setAttribute("class", "slide-image");
      elImage.style.left = slideLeft;
      elContainer.appendChild(elImage);
      if (slideLeft === 0) {
        slideLeft = -99999 + "px";
        console.log(slideLeft);
      }
    })
  }

  //SLIDE SHOW OBJECT.  CONTAINS IMAGE LOCATIONS, METHODS TO CHANGE SLIDE
  const show = {
    slides: [
      "./images/slide0.jpg", 
      "./images/slide1.jpg",
      "./images/slide2.jpg",
      "./images/slide3.jpg"
    ],
    changeSlide: (index) => {
      
      elSlide[index-1].style.left = -99999 + "px";
      elSlide[index].style.left = 0;

    }
  }

  createSlide(show.slides);
  

}());