document.getElementById("count-words").innerHTML = 0
document.getElementById("count-signs-with-spaces").innerHTML = 0
document.getElementById("count-signs-without-spaces").innerHTML = 0
document.getElementById("read-speed").innerHTML = 0
document.getElementById("longestWord").innerHTML = 0




function countSigns() {
    const textarea = document.querySelector('textarea');
    const text = textarea.value;
    const characterCount = text.length;
    document.getElementById("count-signs-with-spaces").innerHTML = " " + characterCount;

}
function countSignsWithoutSpaces() {
    const textarea = document.querySelector('textarea');
    const text = textarea.value;
    let letterCounter = 0
    const textTrimmed = text.trim()


    for (let i = 0; i < textTrimmed.length; i++) {
        const letter = textTrimmed.charAt(i);

        if (letter !== ' ') {
            letterCounter += 1
            console.log(letterCounter)
        }
      
    }
return letterCounter

    document.getElementById("count-signs-without-spaces").innerText = letterCounter
}





function countWords() {
    const text = document.getElementById("user-input").value
    const textTrimmed = text.trim()
    const words = textTrimmed.split(" ")

    document.getElementById("count-words").innerText = words.length

}



function longestWord() {
    const words = document.querySelector('textarea').value
        .trim()
        .split(" ")
        .filter(w => w.length > 0);

    if (words.length === 0) {
        document.getElementById("longestWord").innerText = "";
        return;
    }

    let longest = "";
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }

    document.getElementById("longestWord").innerText = longest;
}


function averageWordLength() {
 

}


function bigLetters() {

    const text = document.querySelector('textarea').value;
    let bigLettersAmount = 0;

    for (let i = 0; i < text.length; i++) {
        const char = text.charAt(i);

        if (char === char.toUpperCase() && char !== char.toLowerCase()) {
            bigLettersAmount++;
        }
    }

    document.getElementById("bigLettersAmount").innerText = bigLettersAmount;
}



function readSpeed() {
    const letterCounter = countSignsWithoutSpaces()


    const characterReadPerMinute = 200
 const  minutes = letterCounter / characterReadPerMinute
 console.log(minutes)

const seconds = minutes * 60
console.log(seconds)

document.getElementById("read-speed").innerText = seconds
}
