import Person from "../practice_10/person"
export default class Teacher extends Person{
    constructor(id,name,age ,classes){
        super(id,name,age);
        this.klasses=classes||[];
    }
    introduce(){
        if (this.klasses.length===0){
          return 'My name is '+ this.name + '. I am ' + this.age +' years old.'+' I am a Teacher. I teach No Class.';
        }
        else {
            let str=this.klasses.map(x=>x.number).join(", ");
            return'My name is '+ this.name + '. I am ' + this.age +' years old.'+' I am a Teacher. I teach Class '+str
            +'.';
        }
    }
    isTeaching(student){
        if(student.klasses===this.klasses) {
            return true
        }else {
            return false
        }

    }


}
