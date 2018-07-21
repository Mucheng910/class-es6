export default class Class {


    constructor(number,leader,members) {
        this.number = number;
        this.leader=leader;
        this.members=[];
    }

    getDisplayName() {
        return 'Class '+this.number;
    }

    assignLeader(student) {
        if (student.klass === this) {
            this.leader = student;
        }
        else {
             console.log('It is not one of us.');
        }
    }
    appendMember(student){
        student.klass=this;
        this.members.push(student.id);

    }
}
