var colors;
colors = ['white', 'black', 'custom'];

var el = document.getElementById('color');
el.textContent = colors[0];

var colors = new Array('white', 'black', 'custom');
var el = document.getElementById('color');
el.innerHTML = colors.item(0);