const btnMenu = document.getElementById('btnAbrir');
const menu = document.getElementById('ctnMenu');


btnMenu.addEventListener('click', function() {
  if (menu.classList.contains('menu-aberto')) {
    menu.classList.remove('menu-aberto')
    btnMenu.classList.remove('fa-xmark')
    btnMenu.classList.add('fa-bars')
  } else {
    menu.classList.add('menu-aberto')
    btnMenu.classList.remove('fa-bars')
    btnMenu.classList.add('fa-xmark')

   
  }
});


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