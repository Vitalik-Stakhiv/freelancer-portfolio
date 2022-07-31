const nav = document.querySelector('#nav');
const navbtn = document.querySelector('#nav__btn');
const navbtnimg = document.querySelector('#nav__btn__img');

navbtn.onclick = () => {
   if (nav.classList.toggle('open')) {
      navbtnimg.src = "/images/icons/nav close.svg";
   } else {
      navbtnimg.src = '/images/icons/nav open.svg';
   }
}

AOS.init({
   once: true
});