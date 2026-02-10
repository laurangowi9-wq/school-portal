// List of students
const students = [
    {username: "alice", password: "123", name: "Alice", maths: 85, english: 78, science: 90},
    {username: "bob", password: "456", name: "Bob", maths: 72, english: 80, science: 68},
    {username: "charlie", password: "789", name: "Charlie", maths: 90, english: 88, science: 95},
    {username: "david", password: "321", name: "David", maths: 60, english: 70, science: 65},
    {username: "emma", password: "654", name: "Emma", maths: 92, english: 85, science: 88}
    // Add more students here
];

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const resultDiv = document.getElementById("result");

    const student = students.find(s => s.username === username && s.password === password);

    if(student){
        resultDiv.innerHTML = `
            Welcome, ${student.name}!<br><br>
            <b>Results:</b><br>
            Maths: ${student.maths}<br>
            English: ${student.english}<br>
            Science: ${student.science}
        `;
    } else {
        resultDiv.innerHTML = "❌ Wrong username or password!";
    }
}
