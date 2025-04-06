const textWord = document.querySelectorAll('.symbol')



const indexList = Array.from(textWord);
let count = 0;


document.addEventListener('keydown', keyDown);

function keyDown(el) {

    if (indexList.length > count) {
        if (indexList[count].textContent.toLowerCase() === el.key) {
            indexList[count].classList.add('symbol_correct')
            count++
        } else {
            document.querySelector('.status__loss').textContent++
        }
    } else if (indexList.length === count) {
        document.querySelector('.status__wins').textContent++
    }

}
