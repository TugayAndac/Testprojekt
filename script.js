let notes = [];
let title = [];
let trashNotes = [];
let trashTitle = [];

function loadBasisArray() {
  let notesSave = localStorage.getItem("notes");
  let titleSave = localStorage.getItem("title");

  if (notesSave && titleSave) {
    notes = JSON.parse(notesSave);
    title = JSON.parse(titleSave);
  }
}

function saveBasisArray() {
  let notesSave = JSON.stringify(notes);
  let titleSave = JSON.stringify(title);

  localStorage.setItem("notes", notesSave);
  localStorage.setItem("title", titleSave);
}

function loadTrashArray() {
  let trashNotesSave = localStorage.getItem("trashnotes");
  let trashTitleSave = localStorage.getItem("trashtitle");

  if (trashNotesSave && trashTitleSave) {
    trashNotes = JSON.parse(trashNotesSave);
    trashTitle = JSON.parse(trashTitleSave);
  }
}

function saveTrashArray() {
  let trashNotesSave = JSON.stringify(trashNotes);
  let trashTitleSave = JSON.stringify(trashTitle);

  localStorage.setItem("trashnotes", trashNotesSave);
  localStorage.setItem("trashtitle", trashTitleSave);
}

function render() {
  let mynotes = document.getElementById("mynotes");
  if (mynotes) {
    mynotes.innerHTML = ""; // Reset the innerHTML to avoid duplicating notes

    for (let i = 0; i < notes.length; i++) {
      mynotes.innerHTML += `
        <div id="${i}" class="notefield">
          <h2>${title[i]}</h2>
          <p>${notes[i]}</p>
          <img onclick="deleteBasisArrayValue(${i})" src="images/mulleimer.png" alt="Trash Icon" class="note-icons" />
        </div>
      `;
    }
  }
}

function renderTrash() {
  let mytrash = document.getElementById("trashnotes");
  if (mytrash) {
    mytrash.innerHTML = ""; // Reset the innerHTML to avoid duplicating trash notes

    for (let i = 0; i < trashNotes.length; i++) {
      mytrash.innerHTML += `
        <div id="${i}" class="notefield">
          <h2>${trashTitle[i]}</h2>
          <p>${trashNotes[i]}</p>
        </div>
      `;
    }
  }
}

function addNote() {
  let text = document.getElementById("message").value;
  let inputTitle = document.getElementById("note-title").value;

  if (text === '' || inputTitle === '') {
    alert('Notiz hinterlassen :)');
    return;
  }

  notes.push(text);
  title.push(inputTitle);
  saveBasisArray();
  render();
}

function deleteBasisArrayValue(i) {
  trashNotes.push(notes[i]);
  trashTitle.push(title[i]);
  notes.splice(i, 1);
  title.splice(i, 1);
  saveBasisArray();
  saveTrashArray();
  render();
}

// Initial loading of notes and rendering
loadBasisArray();
render();
