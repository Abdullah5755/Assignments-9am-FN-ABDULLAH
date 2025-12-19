class Student{
    constructor(name,dep,grade){
        this.name=name;
        this.dep=dep;
        this.grade=grade;
    }
    display(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
}
const S1 = new Student("Abdullah", "IT", "A");
const S2 = new Student("Aisha", "CSE", "B");
const S3 = new Student("Rahman", "ECE", "A+");

S1.display();
S2.display();
S3.display();
