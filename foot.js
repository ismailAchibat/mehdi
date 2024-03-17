function addResult() {
    var team1 = document.getElementById("team1").value;
    var team2 = document.getElementById("team2").value;
    var score = document.getElementById("score").value;
  
    var row = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
  
    cell1.textContent = team1;
    cell2.textContent = team2;
  
    var scoreParts = score.split("-");
    if (scoreParts.length === 2) {
      var scoreText = scoreParts[0].trim() + " - " + scoreParts[1].trim();
      cell3.textContent = scoreText;
    } else {
      cell3.textContent = score;
    }
  
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
  
    document.getElementById("results-table").appendChild(row);
  
    clearForm();
  }
  
  function clearForm() {
    document.getElementById("team1").value = "";
    document.getElementById("team2").value = "";
    document.getElementById("score").value = "";
  }