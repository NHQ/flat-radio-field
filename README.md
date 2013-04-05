# flat radio field

A mobile/touch optimized radio select in the style of Flat UI. For use with Browserify Only.

```
npm install flat-radio-field
```

To play with this repo
```
npm install -g browserify opa
git clone [this repo]
cd [this repo]
opa -e example.js -n
```
## Usage

It's a function that will return a fieldset HTMLElement with your options. Actual radio inputs are used (tho hidden), so this will/should work inside a normal form element.
It takes an options/config object:
```
legend: title of the options list (used in the legend Element)
name: the name for the value all the radios represent (the key for the field)
options: an array of objects with at least a 'value' param (and optionally a 'checked' param)
color: the overall color // optional
legendColor: just the text color of the legend // optional
fontColor: font colors for radio options // optional
selected: color to fill selected radios with // optional
```

## Example
from example.js
```js
var radioField = require('./flatradio.js');

var config = {legend: 'love me with a', name: 'osc-type', options: [{value: 'sine'}, {value: 'triangle'}, {value: 'saw', checked: true}]}

var fieldset = radioField(config)

var div = document.createElement('div');

div.style.width = '220px';

div.appendChild(fieldset)

document.body.appendChild(div);
```


