'use strict';

//make navbar transparent when it is on the top
const navbar=document.querySelector('#navbar')
const navbarHeight=navbar.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
  if (window.scrollY>navbarHeight) {
    navbar.classList.add('navbar--dark');
  }else{
    navbar.classList.remove('navbar--dark');
  }
});

//Handle scrolling when tapping on the navbar menu
const navbarMenu=document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event)=>{
  const target=event.target;
  const link=target.dataset.link;
  if(link==null){
    return;
  }
  scrollIntoView(link);
});

const homeContactBtn=document.querySelector(".home__contact");
homeContactBtn.addEventListener("click",(event)=>{
  scrollIntoView('#contact');
})

//home slowly fade to transparent as the window scrolls down
const home=document.querySelector('.home__container');
const homeHeight=home.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
  home.style.opacity=1-window.scrollY/homeHeight;
});

//show arrow up
const arrowUp=document.querySelector('.arrow-up');
document.addEventListener('scroll',()=>{
  if(window.scrollY>homeHeight/2){
    arrowUp.classList.add('visible');
  }
  else{
    arrowUp.classList.remove('visible');
  }
});

arrowUp.addEventListener('click',()=>{
  const homee=document.querySelector('#home');
  homee.scrollIntoView({behavior:"smooth"});
});






function scrollIntoView(selector){
  const scrollTot=document.querySelector(selector);
  scrollTot.scrollIntoView({behavior:"smooth"});
}

