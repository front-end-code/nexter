const sideBar = document.querySelector('.sidebar');
const sideBarBtn = document.querySelector('.sidebar__btn-wrapper');

sideBarBtn.addEventListener('click', () => {
    sideBar.classList.toggle('toggle-sidebar');
}); 

/*
window.addEventListener("click", (e) => {
    if(e.target.classList.contains("toggle-sidebar") ==! ) {
      sideBar.classList.remove("toggle-sidebar");
    }
});
*\
