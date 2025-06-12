// Εκτελείται αφού φορτωθεί πλήρως το DOM
document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("start_button");
  if (startButton) {
    startButton.addEventListener("click", () => {
      // Ανακατεύθυνση στη λίστα με τα tasks
      window.location.href = "todo.html";
    });
  }
});
