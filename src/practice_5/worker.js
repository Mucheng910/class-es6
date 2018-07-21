import Person from "../practice_5/person"
export default class Worker extends Person{
    constructor(name,age){
        super(name,age);
    }
    introduce(){
        return 'My name is '+ this.name + '. I am ' + this.age +' years old.'+" I am a Teacher. I have a job.";
    }
}