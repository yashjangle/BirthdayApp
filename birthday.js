const birthDate = document.querySelector("#birth-date")
const luckyNumber = document.querySelector("#lucky-no")
const checkButton = document.querySelector(".check-btn")
const textArea = document.querySelector(".result")


function compareValues(sum, luckyNumber) {
    if (sum % luckyNumber == 0) {
        textArea.value = "Your birthday is lucky🥳"

    } else {
        textArea.value = "Your Birthday is not lucky😔"
    }
}

function checkBirthDateIsLucky() {
    const dob = birthDate.value
    const sum = calculateSum(dob)
    if (sum && dob) 
        compareValues(sum, luckyNumber.value)
    else 
        textArea.value = "Please enter both text field 😠"
}

function calculateSum(dob) {
    dob = dob.replaceAll("-", "")
    let sum = 0
    for (i = 0; i < dob.length; i++) {
        sum = sum + Number(dob.charAt(i))

    }
}

checkButton.addEventListener("click", checkBirthDateIsLucky)