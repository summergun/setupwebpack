// class Foo{
//     constructor(){

//     }
//     sayHi(){
//         console.log('bye again!!!!');
//     }
// }

// var f = new Foo();
// f.sayHi();
import Foo from './Foo';
const foo = new Foo({name:'BAR!'});
foo.sayHi();

