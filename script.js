if(student){
    resultDiv.style.display = "block";
    resultDiv.innerHTML = `
        <b>Welcome, ${student.name} 👋</b><br><br>
        <b>Your Results</b><br>
        Maths: ${student.maths}<br>
        English: ${student.english}<br>
        Science: ${student.science}
    `;
} else {
    resultDiv.style.display = "block";
    resultDiv.innerHTML = "❌ Incorrect username or password";
}
