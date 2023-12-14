var elem = document.getElementById('myCanvas'),
    elemLeft = elem.offsetLeft + elem.clientLeft,
    elemTop = elem.offsetTop + elem.clientTop,
    ctx = elem.getContext('2d'),
    elements = [];

for (let y = 0; y < 50; y++) {
    for (let x = 0; x < 365; x++) {
        ctx.fillStyle = "rgba(0, 0, 0, 0.1)";                 // Фон ячейки
        ctx.fillRect((51 * x), (51 * y), 50, 50);             // Рендер и смещение ячейки
        ctx.fillText(`x=${x}, y=${y}`, (51 * x), (51 * y));   // Рендер счетчиков
        elements.push({
            id: `column: ${x}, row: ${y}`,
            color: 'blue',
            width: 50,
            height: 50,
            top: (51 * y),
            left: (51 * x)
        });
    }
}

// Add event listener for `click` events.
elem.addEventListener('click', function(event) {
    var x = event.pageX - elemLeft,
        y = event.pageY - elemTop;

    // Collision detection between clicked offset and element.
    elements.forEach(function(element) {
        if (y > element.top && y < element.top + element.height 
            && x > element.left && x < element.left + element.width) {
            element.color = 'red';
        }
    });

    
    elements.forEach(function(element) {
        ctx.fillStyle = element.color;
        ctx.fillRect(element.left, element.top, element.width, element.height);
    });
}, false);

// // Render elements.
elements.forEach(function(element) {
    ctx.fillStyle = element.color;
    ctx.fillRect(element.left, element.top, element.width, element.height);
});

console.log('elements', elements);