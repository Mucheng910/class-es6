export default class student{
    constructor(name,age,klass){
        this.name=name;
        this.age=age;
        this.klass=klass;
    }
    introduce(){
        return 'I am a Student. I am at Class ' + this.klass +'.';
    }
}
