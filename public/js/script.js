const closeButton = document.querySelector('#btn-close');
const appContainer = document.getElementById('app');

closeButton.addEventListener('click',  () => { 
    appContainer.style.background = 'red'
})