const navbarToggleButton = document.getElementById('menu-toggle-btn');
const sidebar = document.getElementById('sidebar');

navbarToggleButton.addEventListener('click',()=>{
    if(sidebar.classList.contains('d-none')){
        sidebar.classList.remove('d-none');
        sidebar.classList.add('d-block');
        navbarToggleButton.classList.remove('bi-list');
        navbarToggleButton.classList.add('bi-x');
    } else {
        if(sidebar.classList.contains('d-block')){
            sidebar.classList.remove('d-block');
            sidebar.classList.add('d-none');
            navbarToggleButton.classList.remove('bi-x');
            navbarToggleButton.classList.add('bi-list');
        }
    }
    
})