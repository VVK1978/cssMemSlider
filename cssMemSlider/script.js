const slide = document.querySelector(".carousel-slide");
const images = document.querySelectorAll(".image");
let counter = 0;
const step = 20;
slide.style.transform = `translateX(-${step * counter}%)`;

const control=document.querySelectorAll('.control');
const controlItems=document.querySelectorAll('.control-item');
control.forEach((item,index)=>{
  item.addEventListener('click',(event)=>{
    controlItems.forEach(element=>{
      if(element.classList.contains('active')){
        element.classList.remove('active')
        element.classList.add('not-active')
      }
    })
    controlItems[index].classList.remove('not-active')
    controlItems[index].classList.add('active')
    shift(index)
  })
})

function shift(index){
  if (counter >= images.length - 1) counter = -1;
  slide.classList.add("slider-animation");
  counter = +index;
  slide.style.transform = `translateX(-${step * counter}%)`;
}