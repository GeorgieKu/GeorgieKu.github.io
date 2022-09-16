const select1 = new CustomSelect('#select-1');
const select2 = new CustomSelect('#select-2');

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 100,
    pagination: {
        el: '.hero-pagination',
        type: 'bullets',
        clickable: true, 
    },
});

const swiper2 = new Swiper('.swiper-container-2', {
    slidesPerView: "auto",
    loop: false,
    spaceBetween: 32,
    navigation: {
        nextEl: '.offers-button-next',
        prevEl: '.offers-button-prev',
    },
});

const swiper3 = new Swiper('.swiper-container-3', {
    slidesPerView: "auto",
    loop: false,
    spaceBetween: 32,
    navigation: {
        nextEl: '.useful-button-next',
        prevEl: '.useful-button-prev',
    },
});

const validate = new window.JustValidate('#form');

const validation = new JustValidate('#form');

validation
  .addField('#name', [
    {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Минимум 2 символа',
    },
    {
      rule: 'maxLength',
      value: 30,
    },
    {
    rule: 'customRegexp',
    value: /^([а-я])/,
    errorMessage: 'Недопустимый формат'
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Обязательное поле',
    },
    {
      rule: 'email',
      errorMessage: 'Недопустимый формат',
    },
  ])
  .addField('#tel', [
    {
        rule: 'required',
        errorMessage: 'Обязательное поле',
    },
    {
        rule: 'customRegexp',
        value: /^([0-9]( |-)?)?(\(?[0-9]{3}\)?|[0-9]{3})( |-)?([0-9]{3}( |-)?[0-9]{4}|[a-zA-Z0-9]{7})$/,
        errorMessage: 'Недопустимый формат'
        },
  ]);

  const list = document.querySelector('.list')
  const list2 = document.querySelector('.list-2')
  const list3 = document.querySelector('.list-3')
  const list4 = document.querySelector('.list-4')
const btn = document.querySelector('.btn')

btn.addEventListener('click', (e)=> {
  
 list.classList.toggle('hidden')
  e.stopPropagation()

  list2.classList.toggle('hidden')
  e.stopPropagation()

  list3.classList.toggle('hidden')
  e.stopPropagation()

  list4.classList.toggle('hidden')
  e.stopPropagation()


  btn.classList.toggle('hidden')
  e.stopPropagation()

})

document.addEventListener('click', (e)=> {
  if(e.target.closest('.list')) return 
  
  list.classList.add('hidden')

});


