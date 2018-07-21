import Person from "../practice_8/person"
export default class Teacher extends Person{
    constructor(id,name,age ,klass){
        super(id,name,age);
        this.klass=klass;
    }
    introduce(){
        if (this.klass){
            return 'My name is '+ this.name + '. I am ' + this.age +' years old.'+' I am a Teacher. I teach Class ' + this.klass.number +'.'
        }
        else {
            return'My name is '+ this.name + '. I am ' + this.age +' years old.'+' I am a Teacher. I teach No Class.'
        }
    }

}
