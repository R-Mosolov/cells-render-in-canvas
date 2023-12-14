const canvas = document.getElementById("tutorial");
const ctx = canvas.getContext("2d");

// canvas.addEventListener('click', function() { alert(1) }, false);

var elemLeft = canvas.offsetLeft + canvas.clientLeft,
  elemTop = canvas.offsetTop + canvas.clientTop,
  elements = [];

console.log('elemLeft', elemLeft);
console.log('elemTop', elemTop);

// Add event listener for `click` events.
canvas.addEventListener('mouseout', function(event) {
    var x = event.pageX - elemLeft,
        y = event.pageY - elemTop;

    console.log('x', x);
    console.log('y', y);

    elements.push({
      color: 'red',
      width: 150,
      height: 100,
      top: x,
      left: y
    });

    console.log('elements 2', elements);

    // alert('clicked an element');

    // Collision detection between clicked offset and element.
    elements.forEach(function(element) {
        if (y > element.top && y < element.top + element.height 
            && x > element.left && x < element.left + element.width) {
            // alert('clicked an element');
            ctx.fillStyle = "rgba(0, 0, 0, 0.5)"; 
        }
    });
}, false);

// // Add element.
// elements.push({
//     colour: '#05EFFF',
//     width: 150,
//     height: 100,
//     top: 20,
//     left: 15
// });

console.log('elements', elements);

if (canvas.getContext) {
  ctx.font = "14px serif";

  for (let i = 0; i < 50; i++) {
    for (let j = 0; j < 365; j++) {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";                 // Фон ячейки
      ctx.fillRect((60 * j), (60 * i), 50, 50);             // Рендер и смещение ячейки
      ctx.fillText(`i=${i}, j=${j}`, (60 * j), (60 * i));   // Рендер счетчиков
    }
  }
} else {
  alert('Ваш браузер не поддерживает Canvas');
}