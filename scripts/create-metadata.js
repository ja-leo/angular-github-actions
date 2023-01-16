const fs = require('fs');

var items = fs.readdirSync('./dist/angular-github-actions', {withFileTypes: true})
.filter(item => !item.isDirectory())
.map(item => item.name)

var jsArray = items.filter(item => item.endsWith('.js'));
var cssArray = items.filter(item => item.endsWith('.css'))
console.log(jsArray);
console.log(cssArray);

var metadata = {
  'Js': jsArray,
  'CssStyle': cssArray
}

var json = JSON.stringify(metadata);
fs.writeFile('./dist/angular-github-actions/version.json', json, 'utf8', (err)=> {
  if (err) {  console.error(err);  return; };
  console.log("File has been created");
});