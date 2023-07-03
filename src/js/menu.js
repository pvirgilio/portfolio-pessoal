// const btnMenu = document.getElementById('btnAbrir');
// const menu = document.getElementById('ctnMenu');


// btnMenu.addEventListener('click', function() {
//   if (menu.classList.contains('menu-aberto')) {
//     menu.classList.remove('menu-aberto')
//     btnMenu.classList.remove('fa-xmark')
//     btnMenu.classList.add('fa-bars')
//   } else {
//     menu.classList.add('menu-aberto')
//     btnMenu.classList.remove('fa-bars')

//     btnMenu.classList.add('fa-xmark')

   
//   }
// });


const mediaQuery = window.matchMedia('(max-width: 767px)');
const btnMenu = document.querySelector('#btnAbrir');
const menu = document.querySelector('#menu');

const mediaQueryHandler = function (event) {
  if (event.matches) {
    // A consulta de mídia é atendida (largura da janela é menor ou igual a 768px)
    btnMenu.addEventListener('click', toggleMenu);
  } else {
    // A consulta de mídia não é atendida (largura da janela é maior que 768px)
    btnMenu.removeEventListener('click', toggleMenu);
    menu.classList.remove('menu-aberto');
    btnMenu.classList.remove('fa-xmark');
    btnMenu.classList.add('fa-bars');
  }
};

const toggleMenu = function() {
  if (menu.classList.contains('menu-aberto')) {
    menu.classList.remove('menu-aberto');
    btnMenu.classList.remove('fa-xmark');
    btnMenu.classList.add('fa-bars');
  } else {
    menu.classList.add('menu-aberto');
    btnMenu.classList.remove('fa-bars');
    btnMenu.classList.add('fa-xmark');
  }
};

mediaQuery.addListener(mediaQueryHandler);
mediaQueryHandler(mediaQuery);



// const btnMenu = document.getElementById('btnMenu')

// const menu = document.getElementById('ctnMenu')


// btnMenu.addEventListener('click', function () {
//     if (menu.classList.contains('h-0')) {
//         menu.classList.remove('h-0')
//         menu.classList.add('h-fit')
//         btnMenu.style.border = '3px solid gray'
//         btnMenu.style.borderRadius = '5px'
       
//     }
//     else {
//         menu.classList.add('h-0')
//         menu.classList.remove('h-fit')
//         btnMenu.style.border = 'none'

//     }


// })