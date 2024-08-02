
let semesterCount = 1;

// Hardcoded course-credits map
const courseCredits = {
    'BUS 1038': 3,
                'COMP 1010':3,
                'CMMK 1087': 4,
                'HRM 1008': 3,
                'MARK 1020': 3,
                'COMM 1000': 0,
                'COMM 1007': 3,
                'MATH 1027': 0,
                'MATH 1008': 3,
                'ACCT 1036': 3,
                'BUS 1040': 3,
                'COMM 1034': 3,
                'COMP 1115': 3,
                'MATH 1095': 3,
                'PSY 1129': 3,
                'Elective': 3,
                'ECON 1032': 3,
                'MARK 1002': 3,
                'MGMT 1035': 3,
                'MGMT 4009': 3,
                'STAT 1012': 3,
                'STS 1037': 2,
                'ACCT 2031': 3,
                'BUS 1041': 3,
                'BUS 1044': 3,
                'MGMT 2049': 3,
                'CMMK 1156': 3,
                'GHUM 1079': 3,
                'BUS 1038': 3,
                'ECON 1032': 3,
                'FIN 1003': 3,
                'MARK 1020': 3,
                'COMM 2000': 3,
                'MATH 1191': 4,
                'FIN 1011': 3,
                'BUS 1056': 3,
                'FIN 1035': 3,
                'FIN 2035': 3,
                'FIN 2061': 3,
                'GHUM 1189': 3,
                'ACCT 2028': 4,
                'FIN 2003': 3,
                'FIN 2052': 3,
                'FIN 2062': 3,
                'STAT 1010': 4,
                'LAW 1011': 3,
                'FIN 2063': 3,
                'GSSC 1083': 3,
                'GHUM 1189': 3,
                'GSSC 1058': 3,
                'GSSC 1083': 3,
                'FIN 4004': 3,
                'FIN 4005': 3,
                'FIN 4017': 3,
                'FIN 4023': 1,
                'FIN 4024': 3,
                'LAW 4002': 3,
                'MATH 4001': 3,
                'FIN 4010': 3,
                'FIN 4012': 5,
                'FIN 4018': 3,
                'FIN 4025': 3,
                'FIN 4026': 3,
                'ACCT 1001': 5,
                'BUS 1038': 3,
                'ECON 1031':3,
                'CMMK 1087': 3,
                'COMM 1000': 0,
                'COMM 1007': 3,
                'MATH 1191': 4,
                'ACCT 1012': 6,
                'COMM 1034': 3,
                'GSCI 1014': 3,
                'ACCT 2001': 6,
                'ACCT 2011': 4,
                'ACCT 2012': 3,
                'LAW 2003': 3,
                'GSSC 1084': 3,
                'ACCT 2013': 3,
                'ACCT 2014': 4,
                'ACCT 2036': 6,
                'ACCT 3008': 4,
                'COMM 1003': 0,
                'MGMT 2049': 3,
                'MGMT 1020': 3,
                'MGMT 3015': 3,
                'BUS 3015': 3,
                'MGMT 3006': 3,
                'MATH 1131': 3,
                'GSSC 1159': 3,
                'ECON 1034': 3,
                'MARK 1055': 3,
                'MARK 2007': 3,
                'ISHU 1035': 3,
                'MARK 2033': 3,
                'MARK 2065': 3,
                'MARK 2069': 3,
                'GHUM 1059': 3,
                'HRM 1029': 3,
                'HRM 1030': 3,
                'HRM 2004': 3,
                'HRM 2002': 3,
                'HRM 2021': 3,
                'HSAF 1001': 4,
                'LAW 1006': 3,
                'HRM 2003': 3,
                'GHUM 1087': 3,
                'HRM 2027': 3,
                'HRM 2023': 3,
                'COMP 1113': 3,
                'GHUM 1052': 3,
                'HRM 2005': 3,
                'HRM 3005': 3,
                'BUS 1000': 0,
                'INTN 1001': 0,
                'COOP 2001': 0,
                'GSCI 1030': 3,
                'GHUM 1024': 3,
                'ACCT 2007': 3,
                'ACCT 3004': 4,
                'GSCI 1007': 3,
                'GSCI 1006': 3,
                'GHUM 1122': 3,
                'FIN 1034': 3,
                'FIN 3005': 3,
                'MARK 2027': 3,
                'FIN 2005': 3,
                'FIN 2054': 3,
                'FIN 1033': 3,
                'FIN 2033': 3,
                'FIN 3007': 3,
                'FIN 2008': 3,
                'MARK 2028': 3,
                'INTN 2001': 0,
                'MARK 1046': 3,
                'CMMK 2034': 3,
                'MARK 2054': 3,
                'MARK 2063': 3,
                'MARK 2020': 3,
                'MARK 2079': 3,
                'MARK 3017': 3,
                'COMM 2017': 3,
                'COMM 1034': 3,
                'MGMT 1020': 3,
                'COOP 1001': 0,
                'GSCI 1172': 3,
                'GSSC 1055': 3,
                'GSCI 1029': 3,
                'COMP 1115': 3,
                'FIN 1034': 3,
                'FIN 3005': 3,
                'HRM 1008': 3,
                'MARK 2027': 3,
                'MARK 2028': 3,
                'BUS 1040': 3,
                'BUS 1041': 3,
                'FIN 1033': 3,
                'BBUS 1001': 3,
                'BBUS 1006': 3,
                'BCOM 1001': 3,
                'BMTH 1003': 4,
                'LSSC 1209': 3,
                'BACC 1002': 3,
                'BBUS 1106': 3,
                'BBUS 1007': 3,
                'BFPL 1001': 3,
                'LSCI 1205': 3,
                'BCOP 1000': 0,
                'BFPL 2102': 3,
                'BFSM 1101': 3,
                'BFSM 2103': 3,
                'BMTH 1002': 3,
                'LHUM 1203': 3,
                'BACC 3004': 4,
                'BFPL 2103': 3,
                'BFPL 3001': 3,
                'BMTH 2001': 4,
                'LSCI 1204': 3,  
                'BACC 3002': 4,
                'BFPL 3005': 3,
                'BFSM 2001': 3,
                'BLAW 2004': 3,
                'LSSC 1203': 3,
                'BCOP 1101': 0,
                'LSCI 1301': 3,
                'BFPL 3006': 3,
                'BFPL 3003': 3,
                'BACC 3104': 4,
                'BACC 2104': 4,
                'MGMT 4092': 3,
                'MGMT 4093': 3,
                'MGMT 4094': 3,
                'MGMT 4095': 3,
                'MGMT 4096': 3,
                'MGMT 4097': 3,
                'MARK 4005': 3,
                'MGMT 4098': 3,
                'MGMT 4099': 3,
                'MGMT 4100': 3,
                'MGMT 4101': 3,
                'MGMT 4102': 3,
                'MGMT 4103': 7,
                'MGMT 4015': 3,
                'MGMT 4017': 3,
                'MGMT 4019': 3,
                'MGMT 4057': 3,
                'MGMT 4066': 3,
                'MGMT 4085': 3,
                'MGMT 4037': 3,
                'MGMT 4080': 3,
                'MGMT 4081': 6,
                'HRM  4002': 3,
                'LAW  4003' : 3,
                'MARK 1042': 3,
                'MGMT 4042': 3,
                'MGMT 4043': 3,
                'MGMT 4044': 3,
                'MGMT 1028': 3,
                'MGMT 1036': 6,
                'MGMT 4045': 3,
                'MGMT 4046': 3,
                'BUS 4046' : 1.5,
                'BUS 4047' : 1.5,
                'BUS 4022' : 3,
                'COMP 4007': 3,
                'MGMT 4030': 3,
                'MGMT 4084': 3,
                'STAT 4001': 3,
                'BUS 4023': 3,
                'BUS 4024': 3,
                'BUS 4045': 3,
                'COMP 4008': 3,
                'MARK 4018': 3,
                'MGMT 4083': 3,
                'STAT 4003': 3,
                'BCOM 1001': 3,
                'BMTH 1004': 3,
                'BBUS 1004': 3,
                'BCMP 1002': 3,
                'BMTH 1102': 3,
                'BBUS 2102': 3,
                'BBUS 1106': 3,
                'BCMP 1012': 3,
                'BBUS 2000': 3,
                'BBUS 2001': 3,
                'BMTH 2002': 3,
                'BBUS 2003': 3,
                'BBUS 2100': 3,
                'BBUS 2101': 3,
                'BBUS 2103': 3,
                'BACC 1012': 3,
                'BBUS 1006': 3,
                'BBUS 3000': 3,
                'BBUS 1002': 3,
                'BFSM 4101': 3,
                'BBUS 3101': 3,
                'BBUS 3108': 3,
                'BBUS 1007': 3,
                'BBUS 3109': 3,
                'BBUS 4002': 3,
                'BBUS 4003': 3,
                'BBUS 4004': 3,
                'BLAW 2005': 3,
                'BBUS 4001': 3,
                'BBUS 4103': 9,
                'BBUS 4104': 3,
                'BBUS 4105': 3,
                'BBUS 4106': 3,
                'BBUS 4106': 3,
                'ECON 1032': 3,
                'ACCT 2031': 3,
                'COMP 2157': 3,
                'HRM 1008': 3,
                'MGMT 2051': 3,
                'MGMT 3015': 3,
                'MGMT 1035': 3,
                'MGMT 1020': 3,
                'MGMT 3049': 3,
                'BUS 1041': 3,
                'MGMT 3025': 3,
                'MGMT 3027': 3,
                'MGMT 1030': 3,
                'MGMT 3006': 3,
                'MGMT 3037': 3,
                'CMMK 1087': 3,
                'BUS 1038': 3,
                'COMM 1007': 3,
                'COMP 1034': 3,
                'MGMT 2044': 3,
                'MGMT 2047': 3,
                'MGMT 2032': 3,
                'MGMT 2026': 3,
                'MGMT 3031': 3,
                'BUS 3012' : 3,
                'MGMT 2041': 3,
                'MGMT 2042': 3,
                'MGMT 2043': 3,
                'MGMT 3008': 3,
                'BUS 3013' : 3,
                'MGMT 2029': 3,
                'BUS 3017':  3,
                'ACCT 4005': 3,
                'BUS 4017': 3,
                'HRM 4003': 3,
                'HRM 4004': 3,
                'HRM 4005': 3,
                'HRM 4008': 3,
                'HRM 4009': 3,
                'HRM 4010': 3,
                'HRM 4011': 3,
                'HRM 4012': 3,
                'HRM 4013': 4,
                'HRM 4031': 1.5,
                'HRM 4015': 1,
                'BBUS 4106': 3,
                'BBUS 4106': 3,
                'BBUS 4106': 3,
                'BBUS 4106': 3,
                'BBUS 4106': 3,
                'BBUS 4106': 3,
                'BBUS 4106': 3,
                'BBUS 4106': 3,
                'BBUS 4106': 3,
                'BBUS 4106': 3,
                'BBUS 4106': 3,
                'BBUS 4106': 3,
                'BBUS 4106': 3,
                'BBUS 4106': 3,
                'BBUS 4106': 3,
                'ELECTIVE' : 3,































































































































































































































































































































































































































































};

function updateCredits(input) {
    const course = input.value.toUpperCase(); // Convert to uppercase for case-insensitivity
    const creditsCell = input.parentElement.nextElementSibling;
    creditsCell.textContent = courseCredits[course] || 'N/A';
}

function calculateGradePoints(select) {
    const grade = parseFloat(select.value);
    const creditsCell = select.parentElement.previousElementSibling;
    const credits = parseFloat(creditsCell.textContent);
    const gradePointsCell = select.parentElement.nextElementSibling;

    if (!isNaN(grade) && !isNaN(credits)) {
        gradePointsCell.textContent = (grade * credits).toFixed(2);
    } else {
        gradePointsCell.textContent = 'N/A';
    }
}

function addRow(button) {
    const table = button.previousElementSibling;
    const newRow = table.querySelector('tbody').insertRow();
    newRow.innerHTML = `
        <td><input type="text" name="course" oninput="updateCredits(this)"></td>
        <td class="credits"></td>
        <td>
            <select name="grade" onchange="calculateGradePoints(this)">
                <option value="">Select</option>
                <option value="4">A</option>
                <option value="4">A+</option>
                <option value="3.7">A-</option>
                <option value="3.3">B+</option>
                <option value="3">B</option>
                <option value="2.7">B-</option>
                <option value="2.3">C+</option>
                <option value="2">C</option>
                <option value="1.7">C-</option>
                <option value="1.3">D+</option>
                <option value="1">D</option>
                <option value="0">F</option>
            </select>
        </td>
        <td class="gradePoints"></td>
    `;
}

function calculateGPA(button) {
    const table = button.previousElementSibling.previousElementSibling;
    const rows = table.querySelectorAll('tbody tr');
    let totalCredits = 0;
    let totalGradePoints = 0;

    rows.forEach(row => {
        const credits = parseFloat(row.querySelector('.credits').textContent);
        const gradePoints = parseFloat(row.querySelector('.gradePoints').textContent);
        if (!isNaN(credits) && !isNaN(gradePoints)) {
            totalCredits += credits;
            totalGradePoints += gradePoints;
        }
    });

    const gpa = totalGradePoints / totalCredits;
    const gpaResult = button.nextElementSibling;
    gpaResult.textContent = `GPA: ${isNaN(gpa) ? 'N/A' : gpa.toFixed(2)}`;
}

function addSemester() {
    semesterCount++;
    const semestersDiv = document.getElementById('semesters');
    const newSemesterDiv = document.createElement('div');
    newSemesterDiv.className = 'semester';
    newSemesterDiv.innerHTML = `
        <h2>Semester ${semesterCount}</h2>
        <h2 onclick="toggleSemesterContent(this)">Semester ${semesterNumber} <span>&#9662;</span></h2>
        <table class="courseTable">
            <thead>
                <tr>
                    <th>Course</th>
                    <th>Credits</th>
                    <th>Grade</th>
                    <th>Grade Points</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="text" name="course" oninput="updateCredits(this)"></td>
                    <td class="credits"></td>
                    <td>
                        <select name="grade" onchange="calculateGradePoints(this)">
                            <option value="">Select</option>
                            <option value="4">A</option>
                            <option value="4">A+</option>
                            <option value="3.7">A-</option>
                            <option value="3.3">B+</option>
                            <option value="3">B</option>
                            <option value="2.7">B-</option>
                            <option value="2.3">C+</</option>
                            <option value="2">C</option>
                            <option value="1.7">C-</option>
                            <option value="1.3">D+</option>
                            <option value="1">D</option>
                            <option value="0">F</option>
                        </select>
                    </td>
                    <td class="gradePoints"></td>
                </tr>
            </tbody>
        </table>
        <button onclick="addRow(this)">Add Course</button>
        <button onclick="calculateGPA(this)">Calculate GPA</button>
        <h2 class="gpaResult">GPA: N/A</h2>
    `;
    semestersDiv.appendChild(newSemesterDiv);
}

function calculateProgramGPA() {
    const semesters = document.querySelectorAll('.semester');
    let totalCredits = 0;
    let totalGradePoints = 0;

    semesters.forEach(semester => {
        const rows = semester.querySelectorAll('tbody tr');
        rows.forEach(row => {
            const credits = parseFloat(row.querySelector('.credits').textContent);
            const gradePoints = parseFloat(row.querySelector('.gradePoints').textContent);
            if (!isNaN(credits) && !isNaN(gradePoints)) {
                totalCredits += credits;
                totalGradePoints += gradePoints;
            }
        });
    });

    const programGPA = totalGradePoints / totalCredits;
    const programGPAResult = document.getElementById('programGPAResult');
    programGPAResult.textContent = `Your Program GPA is ${isNaN(programGPA) ? 'N/A' : programGPA.toFixed(2)}`;
}


