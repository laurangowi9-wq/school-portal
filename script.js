// List of students
const students = [
    {username: "alice", password: "123", name: "Alice", maths: 85, english: 78, science: 90},
    {username: "bob", password: "456", name: "Bob", maths: 72, english: 80, science: 68},
    {username: "charlie", password: "789", name: "Charlie", maths: 90, english: 88, science: 95},
    {username: "david", password: "321", name: "David", maths: 60, english: 70, science: 65},
    {username: "emma", password: "654", name: "Emma", maths: 92, english: 85, science: 88}
    // add more students here if needed
];

// Login function
function login() {
    const usernameInput = document.getElementById("username").value.trim().toLowerCase();
    const passwordInput = document.getElementById("password").value.trim();
    const resultDiv = document.getElementById("result");

    // Find student (ignores case for username)
    const student = students.find(s =>
        s.username.toLowerCase() === usernameInput &&
        s.password === passwordInput
    );

    if(student){
        resultDiv.style.display = "block";
        resultDiv.innerHTML = `
            <b>Welcome, ${student.name} 👋</b><br><br>
            <b>Your Results:</b><br>
            Maths: ${student.maths}<br>
            English: ${student.english}<br>
            Science: ${student.science}
        `;
    } else {
        resultDiv.style.display = "block";
        resultDiv.innerHTML = "❌ Incorrect username or password";
    }
}
