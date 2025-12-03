document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("studentName").value;
    let score = parseInt(document.getElementById("studentScore").value);

    let grade = "";

    if (score >= 70) grade = "A";
    else if (score >= 60) grade = "B";
    else if (score >= 50) grade = "C";
    else if (score >= 45) grade = "D";
    else if (score >= 40) grade = "E";
    else grade = "F";

    let tableBody = document.getElementById("tableBody");

    let row = `<tr>
                    <td>${name}</td>
                    <td>${score}</td>
                    <td>${grade}</td>
               </tr>`;

    tableBody.innerHTML += row;

    document.getElementById("studentForm").reset();
});