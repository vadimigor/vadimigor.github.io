let popupBg=document.querySelector('.popup__bg');
let popup=document.querySelector('.popup');
let openPopupButtons=document.querySelectorAll('.open-popup');
let closePopupButtons=document.querySelector('.close-popup');

openPopupButtons.forEach((button) => {
  button.addEventListener('click',(e)=>{
    e.preventDefault();
    popupBg.classList.add('active');

  });
});
closePopupButtons.addEventListener('click',()=>{
  popupBg.classList.remove('active');
  popup.classList.remove('active');

});
