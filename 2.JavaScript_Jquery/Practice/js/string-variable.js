
var title;
var message;
title = "Molly's Special Offiers";
message = '<a href=\"sale.html"\>25% off!</a>'

var elTitle = document.getElementById('title');
elTitle.innerHTML = title;
var elNote = document.getElementById('note');
elNote.innerHTML = message;

var inStock;
var shipping;
inStock = true;
shipping = false;
var elStock = document.getElementById('stock');
elStock.className = inStock;
var elShip = document.getElementById('shipping');
elShip.className = shipping;

var el = document.getElementById('cost');
el.textContent = '$' + total;