var radioField = require('./flatradio.js');

var fieldset = radioField({legend: 'love me with a', name: 'osc-type', options: [{value: 'sine'}, {value: 'triangle'}, {value: 'saw', checked: true}]})

var div = document.createElement('div');

div.style.width = '220px';

div.appendChild(fieldset)

document.body.appendChild(div);



