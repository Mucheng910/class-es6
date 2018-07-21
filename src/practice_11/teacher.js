import Person from "../practice_11/person"
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
        return this.klasses.some(x => x.isIn(student));
    }
    notifyLogAssign(student){
        if(this.klasses.includes(student.klass)){
            console.log('I am '+this.name+'. I know '+student.name+' has joined Class'+ student.klass.number+'.')
        }

    }
    notifyLogJoin(student){
        if (this.klasses.some(x=>x._members.includes(student))){
            console.log(`I am ${this.name}. I know ${student.name} become Leader of Class ${student.klass.number}.`)
        }
    }


}
