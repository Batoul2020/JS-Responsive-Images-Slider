const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev')
const auto = true; 
const intervaltime = 5000;
let slideInterval;

 const nextSlide = () => {
    //Get current class
    const current = document.querySelector('.current');
    //Remove current class
    current.classList.remove('current');
    //Check for next slide 
    if (current.nextElementSibling) {
        //Add current to the next sibling  
        current.nextElementSibling.classList.add('current');
    } else {
        //Add current to the start 
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
 }

 const prevSlide = () => {
    //Get current class
    const current = document.querySelector('.current');
    //Remove current class
    current.classList.remove('current');
    //Check for prev slide 
    if (current.previousElementSibling) {
        //Add current to the prev sibling  
        current.previousElementSibling.classList.add('current');
    } else {
        //Add current to the last 
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
 }
 //Button events 
 next.addEventListener('click', e => {
    nextSlide();
    if(auto){
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, intervaltime);
    }
 });
 prev.addEventListener('click', e => {
    previousSlide()
    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervaltime);
      }
 })

 //Auto Slide
 if (auto) {
    //run next slide at interval time
    slideInterval = setInterval(nextSlide, intervaltime);
 }