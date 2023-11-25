const names= require('./modules');
const sayHi= require('./2-global');   
const one=require('./5-module')
console.log(one);
require('./7-module')
sayHi("hadi")
sayHi("hello")
sayHi(names.b)
sayHi(names.a)