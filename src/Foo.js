import Bar from './Bar';

export default class Foo{
    constructor(obj){
        this.name = obj.name;
    }

sayHi() {
    console.log(`Hi my name is ${this.name}`) ;
    }
}