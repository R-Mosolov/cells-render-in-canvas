const elem = document.getElementById('canvas'),
    elemLeft = elem.offsetLeft + elem.clientLeft,
    elemTop = elem.offsetTop + elem.clientTop,
    ctx = elem.getContext('2d'),
    elems = [];

// ШАГ 1. Первичный рендер ячеек
for (let y = 0; y < 50; y++) {                                // Кол-во исполнителей (строк) для рендера
    for (let x = 0; x < 365; x++) {                           // Кол-во дней (колонок) для рендера
        ctx.fillStyle = "blue";                               // ШАГ 1.1. Установление фона ячейки
        ctx.fillRect((51 * x), (51 * y), 50, 50);             // ШАГ 1.2. Рендер и смещение ячейки
        ctx.fillText(`x=${x}, y=${y}`, (51 * x), (51 * y));   // ШАГ 1.3. Рендер счетчиков
        
        elems.push({                                          // ШАГ 1.4. Сбор данных по ячейкам
            id: `column: ${x}, row: ${y}`,
            color: 'blue',
            width: 50,
            height: 50,
            top: (51 * y),
            left: (51 * x)
        });
    }
}

// ШАГ 2. Установление события onClick
elem.addEventListener('click', function(event) {
    const x = event.pageX - elemLeft,
        y = event.pageY - elemTop;
    const newElems = [];

    // ШАГ 3. Проверка, что ячейка принадлежит нужному диапазону
    // (вместо использования className в Реакте)
    elems.forEach(function(element) {
        const isActiveCellRange = 
            y > element.top 
            && y < element.top + element.height 
            && x > element.left 
            && x < element.left + element.width;

        if (isActiveCellRange) {
            newElems.push(element);
        }
    });

    // ШАГ 4. Повторный рендер только измененных ячеек
    newElems.forEach(function(element) {
        element.color = 'red';
        ctx.fillStyle = element.color;
        ctx.fillRect(element.left, element.top, element.width, element.height);
    });
}, false);