const buttenList = document.querySelector('.dropdown__value')
const listOpen = document.querySelector('.dropdown__list')

const lists = document.querySelectorAll('.dropdown__item')

const links = document.querySelectorAll('a')


// Open list
buttenList.addEventListener('click', () => listOpen.classList.toggle('dropdown__list_active'));

listOpen.onclick = function(e) {
    buttenList.textContent = e.target.textContent

}

links.forEach(e => {
    e.onclick = () => {return false}
})