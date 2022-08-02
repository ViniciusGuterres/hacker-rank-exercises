function angryProfessor(threshoold, studentsArriveTime) {
    const justInTimeStudent = studentsArriveTime.filter(timeArrive => timeArrive <= 0);
    console.log("🚀 ~ file: angryProfessor.js ~ line 3 ~ angryProfessor ~ justInTimeStudent", justInTimeStudent)

    return justInTimeStudent?.length < threshoold ? 'YES' : 'NO'; 
}

const threshooldAttendees = 3;
const studentsArriveTimeArray = [ -1, -3, 4, 2 ];

console.log(angryProfessor(threshooldAttendees, studentsArriveTimeArray))