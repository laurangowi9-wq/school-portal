// Students list
const students = [
    {username: "alice", password: "123", name: "Alice", maths: 85, english: 78, science: 90},
    {username: "bob", password: "456", name: "Bob", maths: 72, english: 80, science: 68},
    {username: "charlie", password: "789", name: "Charlie", maths: 90, english: 88, science: 95},
    {username: "david", password: "321", name: "David", maths: 60, english: 70, science: 65},
    {username: "emma", password: "654", name: "Emma", maths: 92, english: 85, science: 88}
];

// Function to calculate grade
function getGrade(score) {
    if(score >= 85) return "A";
    else if(score >= 70) return "B";
    else return "C";
}

// Login function
function login() {
    const usernameInput = document.getElementById("username").value.trim().toLowerCase();
    const passwordInput = document.getElementById("password").value.trim();
    const resultDiv = document.getElementById("result");

    const student = students.find(s =>
        s.username.toLowerCase() === usernameInput &&
        s.password === passwordInput
    );

    if(student){
        resultDiv.style.display = "block";

        // Show results in table with grades
        resultDiv.innerHTML = `
            <b>Welcome, ${student.name} 👋</b><br><br>
            <b>Your Results:</b>
            <table>
                <tr>
                    <th>Subject</th>
                    <th>Score</th>
                    <th>Grade</th>
                </tr>
                <tr>
                    <td>Maths</td>
                    <td>${student.maths}</td>
                    <td class="grade-${getGrade(student.maths)}">${getGrade(student.maths)}</td>
                </tr>
                <tr>
                    <td>English</td>
                    <td>${student.english}</td>
                    <td class="grade-${getGrade(student.english)}">${getGrade(student.english)}</td>
                </tr>
                <tr>
                    <td>Science</td>
                    <td>${student.science}</td>
                    <td class="grade-${getGrade(student.science)}">${getGrade(student.science)}</td>
                </tr>
            </table>
            <p>${(student.maths+student.english+student.science)/3 >= 85 ? "🎉 Excellent Work!" : ""}</p>
        `;
    } else {
        resultDiv.style.display = "block";
        resultDiv.innerHTML = "❌ Incorrect username or password";
    }
}
