const canvas = document.getElementById("tutorial");
const ctx = canvas.getContext("2d");

for (let i = 0; i < 50; i++) {
  for (let j = 0; j < 365; j++) {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";                 // Фон ячейки
    ctx.fillRect((60 * j), (60 * i), 50, 50);             // Рендер и смещение ячейки
    ctx.fillText(`i=${i}, j=${j}`, (60 * j), (60 * i));   // Рендер счетчиков
  }
}

// canvas.addEventListener('click', function() { alert(1) }, false);

var elemLeft = canvas.offsetLeft + canvas.clientLeft,
  elemTop = canvas.offsetTop + canvas.clientTop,
  elements = [];

console.log('elemLeft', elemLeft);
console.log('elemTop', elemTop);

// Add event listener for `click` events.
canvas.addEventListener('mouseover', function(event) {
    var x = event.pageX - elemLeft,
        y = event.pageY - elemTop;

    console.log('x', x);
    console.log('y', y);

    elements.push({
      color: 'rgba(0, 0, 0, 0.5)',
      width: 50,
      height: 50,
      top: x,
      left: y
    });

    console.log('elements 2', elements);

    elements.forEach(function(element) {
        if (y > element.top && y < element.top + element.height 
            && x > element.left && x < element.left + element.width) {
            ctx.fillStyle = "rgba(0, 0, 0, 0.5)"; 
        }
    });
}, false);