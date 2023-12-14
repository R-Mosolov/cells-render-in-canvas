var buffer = document.createElement('canvas');
buffer.width  = 25000;
buffer.height = 3500;
buffer.ctx    = buffer.getContext('2d');

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

// // Render elements.
elements.forEach(function(element) {
    ctx.fillStyle = element.color;
    ctx.fillRect(element.left, element.top, element.width, element.height);
});

// Add event listener for `click` events.
elem.addEventListener('click', function(event) {
    var x = event.pageX - elemLeft,
        y = event.pageY - elemTop;
    const newElements = [];

    // Collision detection between clicked offset and element.
    elements.forEach(function(element) {
        if (y > element.top && y < element.top + element.height 
            && x > element.left && x < element.left + element.width) {
            newElements.push(element);
        }
    });

    newElements.forEach(function(element) {
        element.color = 'red';
        ctx.fillStyle = element.color;
        ctx.fillRect(element.left, element.top, element.width, element.height);
    });
}, false);

console.log('elements', elements);

ctx.drawImage( buffer, 0, 0 );