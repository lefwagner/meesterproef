
var dialogOpen = false;

const EersteTijdlijnButton = document.querySelector("section button");
const EersteDialog = document.querySelector("section dialog");
const EersteForm = document.querySelector("section dialog form");
const aside = document.querySelector("aside");

EersteTijdlijnButton.addEventListener("click", openEersteDialog);

function openEersteDialog() {
    EersteDialog.showModal();
    dialogOpen = true;
}

const Eerstedialogclosebutton = document.querySelector("section dialog button");