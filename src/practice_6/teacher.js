import Person from "../practice_6/person"
export default class Worker extends Person{
    constructor(name,age ,klass){
        super(name,age);
        this.klass=klass;
    }
    introduce(){
        if (this.klass){
            return 'My name is '+ this.name + '. I am ' + this.age +' years old.'+' I am a Teacher. I teach Class ' + this.klass +'.'
        }
        else {
            return'My name is '+ this.name + '. I am ' + this.age +' years old.'+' I am a Teacher. I teach No Class.'
        }


    }
}
