const buttenList = document.querySelector('.dropdown__value')
const listOpen = document.querySelector('.dropdown__list')

const lists = document.querySelectorAll('.dropdown__item')

const links = document.querySelectorAll('a')


// Open list
buttenList.addEventListener('click', () => listOpen.classList.add('dropdown__list_active'));


// выбор значения
listOpen.onclick = function(e) {
    buttenList.textContent = e.target.textContent
    listOpen.classList.remove('dropdown__list_active')
}

// запрет перехода по ссылке
links.forEach(e => {
    e.onclick = () => {return false}
})