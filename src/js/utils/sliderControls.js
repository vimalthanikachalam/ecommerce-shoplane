const slides = document.querySelectorAll(".slides");
const dot = document.querySelectorAll(".banner_dot");
let index = 0;

//Set the time limit for sliders
const timer = 6000;

//Slider curent item active
export const changeSlide = (e) => {
  if (e !== undefined) {
    index = e;
  }
  if (index < 0) {
    index = slides.length - 1;
  }
  if (index > slides.length - 1) {
    index = 0;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dot[i].classList.remove("slider_active");
  }
  //set the cuurnet element to active
  slides[index].style.display = "block";
  dot[index].classList.add("slider_active");
  index++;
};

//change slides
export const timerInterval = () => {
  const interval = setInterval(changeSlide, timer);
  //change the slides on click
  for (let i = 0; i < dot.length; i++) {
    dot[i].addEventListener("click", (e) => {
      clearInterval(interval);
      changeSlide(e.target.dataset.value - 1);
    });
  }
};
