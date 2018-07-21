import Person from "../practice_11/person"
export default class Student extends Person{
    constructor(id,name,age,klass){
        super(id,name,age);
        this.klass=klass;
    }
    introduce() {
        if (this.klass.leader === this) {
            return 'My name is ' + this.name + '. I am ' + this.age + ' years old.' + ' I am a Student. I am Leader of Class ' + this.klass.number + '.';
        }
        else {
            return 'My name is ' + this.name + '. I am ' + this.age + ' years old.' + ' I am a Student. I am at Class ' + this.klass.number + '.';
        }
    }
}
