let originalInput = document.querySelector("#original");
let shiftInput = document.querySelector("#shift");
let encryptedInput = document.querySelector("#encrypted");

let originalMessage = originalInput.value;

originalInput.addEventListener("input", characterEntered, false);
shiftInput.addEventListener("input", numberEntered, false);

function characterEntered(e) {
    originalMessage = e.target.value;
    originalMessage = originalMessage.toLowerCase();
    originalMessage = originalMessage.replace(/[^a-z]/,'');

    e.target.value = originalMessage;

    startEncryption();
}

function numberEntered(e) {
    startEncryption
}

function startEncryption() {
    let encryptedMessage = "";
    let shift = shiftInput.value ? Number(shiftInput.value) : 0;
    console.log(shift);
  
    for (letter of originalMessage) {
      encryptedMessage += shiftLetters(letter, shift);
    }
  
    console.log(encryptedMessage);
    encryptedInput.value = encryptedMessage;
  }
  startEncryption();

function shiftLetters(letter, shift) {
    let newLetter = "";

    let letterCode = letter.charCodeAt(0);
    let newLetterCode = letterCode + (shift % 26);

    if (newLetterCode < 97) {
        newLetterCode += 26;
    } 
    else if (newLetterCode > 122) {
        newLetterCode -= 26;
    }

    newLetter=String.fromCharCode(newLetterCode);

    return newLetter;
}

function onlyNumberKey(evt) {
          
    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}

function refreshPage() {
    window.location.reload();
}