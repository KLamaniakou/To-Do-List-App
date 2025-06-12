// Επιλογή των βασικών στοιχείων από το DOM
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

/**
 * Προσθέτει νέα εργασία (task) στη λίστα
 */
function addTask() {
  if (inputBox.value === '') {
    alert("You must write something");
  } else {
    // Δημιουργία νέου <li> στοιχείου με το κείμενο του χρήστη
    const li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    // Προσθήκη κουμπιού διαγραφής (✖)
    const span = document.createElement("span");
    span.innerHTML = "\u00d7"; // Unicode για ✖
    li.appendChild(span);
  }

  // Καθαρισμός του input πεδίου
  inputBox.value = "";

  // Αποθήκευση στο localStorage
  saveData();
}

/**
 * Χειρισμός click για έλεγχο (completed) ή διαγραφή task
 */
listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    // Εναλλαγή class "checked" για ολοκλήρωση task
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    // Διαγραφή του task
    e.target.parentElement.remove();
    saveData();
  }
});

/**
 * Αποθήκευση της λίστας στο localStorage
 */
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

/**
 * Εμφάνιση των αποθηκευμένων εργασιών όταν φορτώνει η σελίδα
 */
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

// Κλήση της συνάρτησης κατά την εκκίνηση
showTask();
