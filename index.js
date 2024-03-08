const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

checkBtn.addEventListener("click", function () {
    const text = textInput.value.trim();

    if (!text) {
        alert("Please input a value");
        return;
    }

    const isPalindrome = checkForPalindrome(text);
    const message = isPalindrome ? `${text} is a palindrome! ` : `${text} is not a palindrome. `;
    resultDiv.textContent = message;
});

function checkForPalindrome(text) {
    const cleanedText = text.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversedText = cleanedText.split("").reverse().join("");
    return cleanedText === reversedText;
}
