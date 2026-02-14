let courses = [];

function addCourse(){

    const name = document.getElementById("courseName").value || "Course";
    const grade = document.getElementById("grade").value;

    const credit = 3;

    courses.push({name,grade,credit});

    displayCourses();
    calculateGPA();

    document.getElementById("courseName").value = "";
}

function displayCourses(){
    const list = document.getElementById("courseList");
    list.innerHTML = "";

    courses.forEach((course,index)=>{
        const li = document.createElement("li");
        li.innerHTML = `
            ${course.name} - ${course.grade}
            <button onclick="removeCourse(${index})">X</button>
        `;
        list.appendChild(li);
    });
}

function removeCourse(index){
    courses.splice(index,1);
    displayCourses();
    calculateGPA();
}

function calculateGPA(){
    let totalPoints = 0;
    let totalCredits = 0;

    courses.forEach(course=>{
        totalPoints += getGradePoints(course.grade) * course.credit;
        totalCredits += course.credit;
    });

    let gpa = totalCredits ? (totalPoints / totalCredits).toFixed(2) : "0.00";
    document.getElementById("gpa").innerText = gpa;
}

function getGradePoints(grade){
    switch(grade){
        case "A+": return 4.0;
        case "A": return 3.75;
        case "B+": return 3.4;
        case "B": return 3.0;
        case "C+": return 2.75;
        case "C": return 2.5;
        case "D+": return 2.25;
        case "D": return 2.0;
        default: return 0.0;
    }
}
