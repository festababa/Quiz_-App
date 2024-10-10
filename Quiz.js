function check() {
    var mark1 = document.querySelector('input[name="q1"]:checked').value; 
    var mark2 = document.querySelector('input[name="q2"]:checked').value;
    var mark3 = document.querySelector('input[name="q3"]:checked').value;
    var mark4 = document.querySelector('input[name="q4"]:checked').value;
    var mark5 = document.querySelector('input[name="q5"]:checked').value;
    var answer1 = "if (i!= 5)"; 
    var answer2 = "function myFunction()";
    var answer3 = "onclick";
    var answer4 = 'alert("Hello World");';
    var answer5 = "Math.max(x, y)";
    var count = 0;
    if (mark1.localeCompare(answer1) == 0) {
      document
        .getElementById("q1")
        .insertAdjacentHTML(
          "afterend",
          '<div class="green-container"> Your Answer is Correct!" </div > '
        );
      count++;
    } else {
      document
        .getElementById("q1")
        .insertAdjacentHTML(
          "afterend",
          '<div class="red-container"> Your Answer is Not Correct!<br>The Correct Answer is "if (i!= 5)" </div > '
        );
    }
    if (mark2.localeCompare(answer2) == 0) {
      document
        .getElementById("q2")
        .insertAdjacentHTML(
          "afterend",
          '<div class="green-container"> Your Answer is Correct!" </div > '
        );
      count++;
    } else {
      document
        .getElementById("q2")
        .insertAdjacentHTML(
          "afterend",
          '<div class="red-container"> Your Answer is Not Correct!<br>The Correct Answer is "function myFunction()" </div > '
        );
    }
    if (mark3.localeCompare(answer3) == 0) {
      document
        .getElementById("q3")
        .insertAdjacentHTML(
          "afterend",
          '<div class="green-container"> Your Answer is Correct!" </div > '
        );
      count++;
    } else {
      document
        .getElementById("q3")
        .insertAdjacentHTML(
          "afterend",
          '<div class="red-container"> Your Answer is Not Correct!<br>The Correct Answer is "onclick" </div > '
        );
    }
    if (mark4.localeCompare(answer4) == 0) {
      document
        .getElementById("q4")
        .insertAdjacentHTML(
          "afterend",
          '<div class="green-container"> Your Answer is Correct!" </div > '
        );
      count++;
    } else {
      document
        .getElementById("q4")
        .insertAdjacentHTML(
          "afterend",
          '<div class="red-container"> Your Answer is Not Correct!<br>The Correct Answer is "alert("Hello World");" </div > '
        );
    }
    if (mark5.localeCompare(answer5) == 0) {
      document
        .getElementById("q5")
        .insertAdjacentHTML(
          "afterend",
          '<div class="green-container"> Your Answer is Correct!" </div > '
        );
      count++;
    } else {
      document
        .getElementById("q5")
        .insertAdjacentHTML(
          "afterend",
          '<div class="red-container"> Your Answer is Not Correct!<br>The Correct Answer is "Math.max(x, y)" </div > '
        );
    }
    var btn = document.getElementById("Button");
    btn.hidden = "true";
    const template = document.createElement("div");
  
    if (count == 5) {
      template.innerHTML = "Congratulations!<br>Your Obtained Score is " + count;
    } else if (count == 0) {
      template.innerHTML =
        "You Need A Lot of Improvement! <br>Your Obtained Score is " + count;
    } else if (count > 0 && count <= 2) {
      template.innerHTML =
        "Better Luck Next Time! <br>Your Obtained Score is " + count;
    } else if (count > 2) {
      template.innerHTML = "Good Job! <br>Your Obtained Score is " + count;
    }
    template.setAttribute("id", "scores");
    document.body.appendChild(template);
    var button = document.createElement("BUTTON");
    button.innerHTML =
      '<a href="./Quiz.html" style="text-decoration:none; color:black;">Retake</a>';
    button.setAttribute("id", "retake");
    document.body.appendChild(button);
    queryForm.appendChild(document.createElement("br"));
    queryForm.appendChild(document.createElement("br"));
    queryForm.appendChild(document.createElement("br"));
    queryForm.appendChild(document.createElement("br"));
  }