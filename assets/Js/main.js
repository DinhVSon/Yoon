const searchIcon = document.querySelector('.searchIcon');
const searchInput = document.querySelector('.searchInput');

searchIcon.addEventListener('click', function() {
    searchInput.style.display = 'block'; 
    searchInput.focus();})