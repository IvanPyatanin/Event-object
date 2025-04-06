const tabList = Array.from(document.querySelectorAll('.tab'));
const contentList = Array.from(document.querySelectorAll('.tab__content'));


tabList.forEach(el => {

    el.addEventListener('click', function() {
        tabList.forEach(el => {el.classList.remove('tab_active')});
        el.classList.add('tab_active');

        contentList.forEach(el => {
            el.classList.remove('tab__content_active');
        });

        contentList[tabList.indexOf(el)].classList.add('tab__content_active')
    })

})