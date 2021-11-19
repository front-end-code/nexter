const sideBar = document.querySelector('.sidebar');
const sideBarBtn = document.querySelector('.sidebar__btn-wrapper');

sideBarBtn.addEventListener('click', () => {
    sideBar.classList.toggle('toggle-sidebar');
})