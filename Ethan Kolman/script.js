function showScoreMessage() {
  document.getElementById("scoreMessage").innerHTML =
    "Nice job! Keeping track of your scores helps you improve over time.";
}

function showWelcome() {
  document.getElementById("welcomeMessage").innerHTML =
    "Welcome to Golf Round Tracker. This site is made for golfers who want to save scores and memories.";
}

function saveCourse() {
  let courseName = document.getElementById("dreamCourse").value;

  if (courseName === "") {
    document.getElementById("courseOutput").innerHTML =
      "Please enter a golf course name.";
  } else {
    document.getElementById("courseOutput").innerHTML =
      "Your dream course is: " + courseName;
  }
}