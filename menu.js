const mobileMenu =document.querySelector('.mobile-menu-button');
const sideBar = document.querySelector('.sidebar');
const closeMenu = document.querySelector('.close-mobile-menu');





// to open the mobile menu button
mobileMenu.addEventListener("click", () => {
    sideBar.classList.remove("translate-x-full");
})


// to close the mobile menu button
closeMenu.addEventListener("click", () =>{
    sideBar.classList.add("translate-x-full");
})