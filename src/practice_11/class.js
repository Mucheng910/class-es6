export default class Class {


    constructor(number,leader,members) {
        this.number = number;
        this.leader=leader;
        this.members=[];
        this.joinListeners = [];
        this.assignLeaderListeners = [];
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
        this.assignLeaderListeners.forEach(x=>x.notifyLogAssign(student))
    }
    appendMember(student){
        student.klass=this;
        this.members.push(student.id);
        this.joinListeners.forEach(x=>x.notifyLogJoin(student))
    }
    // isIn(student){
    //     return this.members.includes(student);
    // }
    registerAssignLeaderListener(teacher){
        this.assignLeaderListeners.push(teacher);

    }
    registerJoinListener(teacher){
        this.joinListeners.push(teacher);

    }


}
