class Person{
    name;
    age;
    gender;
    
    constructor(name,gender,age){
        //make it abstract class
        if(this.constructor === Person){
            throw new Error("You cannot create an instance of person class");
        }
        this.name = name;
        this.age = age;
        this.gender=gender;
    }
    show(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`);
    }

    set setName(name){
        this.name = name;
    }
    get getName(){
        return this.name;
    }

    set setAge(age){
        this.age = age;
    }
    get getAge(){
        return this.age;
    }

    set setGender(gender){
        this.gender=gender;
    }
    get getGender(){
        return this.gender;
    }
}

class Employee extends Person{
    empId;
    salary;
    static employeesNumber = 0;
    
    constructor (name,gender,age,empId,salary){
        super(name,gender,age);
        this.empId = empId;
        this.salary = salary;
        this.employeesNumber++;
    }
    show(){
        super.show();
        console.log(`EmpId: ${this.empId}, Salary: ${this.salary}`);
    }
    set setEmpId(empId){
        this.empId = empId;
    }
    get getEmpId(){
        return this.empId;
    }

    set setSalary(salary){
        this.salary = salary;
    }
    get getSalary(){
        return this.salary;
    }

    static displayRules(){
        console.log("Employee Rules");
        
        console.log("1. Be punctual.");
        console.log("2. Maintain professionalism.");
        console.log("3. Adhere to company policies.");
        console.log("4. Respect colleagues.");
        console.log("5. Meet deadlines.");


    }
}

SalaryMixin = {
    showSalary() {
        console.log(`Salary: ${this.salary}`);
    },
    increaseSalary(amount) {
        this.salary += amount;
        console.log(`New Salary: ${this.salary}`);
    }
};

Object.assign(Employee.prototype, SalaryMixin);

class Course{
    courseId;
    courseName;
    constructor(courseId,courseName){
        this.courseId = courseId;
        this.courseName = courseName;
        this.courseDuration = courseDuration;
    }
    show(){
        console.log(`CourseId: ${this.courseId}, CourseName: ${this.courseName}`);
    }
    set setCourseId(courseId){
        this.courseId = courseId;
    }
    get getCourseId(){
        return this.courseId;
    }

    set setCourseName(courseName){
        this.courseName = courseName;
    }
    get getCourseName(){
        return this.courseName;
    }

}

class Student extends Person{
    studentId;
    marks;
    courses = [];
    constructor(name,gender,age,studentId,marks){
        super(name, gender, age);
        if(this.constructor != Student){
            throw new Error("You cannot inherate from student class");
        }
        this.studentId = studentId;
        this.marks = marks;
    }
    show(){
        super.show();
        console.log(`StudentId: ${this.studentId}, Marks: ${this.marks}`);
    }
    set setStudentId(studentId){
        this.studentId = studentId;
    }
    get getStudentId(){
        return this.studentId;
    }

    set setMarks(marks){
        this.marks = marks;
    }
    get getMarks(){
        return this.marks;
    }

}