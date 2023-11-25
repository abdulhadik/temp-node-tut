const loda=require('lodash');

const arraY=[1,[1,[2,[2,[3,[3,[6]]]]]]];
const answ=loda.flattenDeep(arraY)
console.log(answ);