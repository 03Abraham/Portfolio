const menuHamburger = document.querySelector(".menu-hamburger")
        const navLinks = document.querySelector(".nav__links")
 
        menuHamburger.addEventListener('click',()=>{
        navLinks.classList.toggle('mobile-menu')
        })
// const toggleMenu = (menu__humburger, navId) => {
//   document.querySelector(menu__humburger)?.addEventListener('click', () =>
//     document.getElementById(navId)?.classList.toggle('Mobile__menu')
//   );
// };

// // toggleMenu('nav__links', 'nav-menu');
// // document.querySelectorAll('.nav__link').forEach(link =>
// //   link.addEventListener('click', () =>
// //     document.getElementById('nav-menu')?.classList.remove('show')
// //   )
// // );

