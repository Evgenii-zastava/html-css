document.addEventListener('DOMContentLoaded', function() { //задаем событие для документа, DOMContentLoaded - когда дом полностью готов (файл полностью прогружен)//
    document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn) { //отобрали все четыре кнопки с классом .tab__btn, forEach - выполняет итерацию каждого элемента по списку (т.е. перебирает каждый элемент)
        tabsBtn.addEventListener('click', function (event) { //вызывается операция при возникновении click (клика)
            const path = event.currentTarget.dataset.path //currentTarget - элемент, по которому был совершен клик, dataset - набор data атрибутов
                document.querySelectorAll('.tab-content').forEach(function(tabContent) {
                tabContent.classList.remove('tab-content-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
        })
    })
})