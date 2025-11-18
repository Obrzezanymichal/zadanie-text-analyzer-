document.getElementById("count-words").innerText = 0
document.getElementById("count-character").innerText = 0
document.getElementById("count-spaces").innerText = 0
document.getElementById("count-character-no-spaces").innerText = 0
document.getElementById("read-time").innerText = 0
function analyze() {
    console.log("analizuję...")


    const text = document.getElementById("user-input").value

    const textTrimmed = text.trim()

    const words = textTrimmed.split(" ")

    document.getElementById("count-words").innerText = words.length

    let spaceCounter = 0;

    for (let i = 0; i < textTrimmed.length; i++) {

        const character = textTrimmed.charAt(i);

        if (character === ' ') { 

            spaceCounter += 1
        }
    }

    document.getElementById("count-spaces").innerText = spaceCounter

    document.getElementById("count-character").innerText = text.length


    for (let i = 0; i < textTrimmed.lenght; i++) {
        const letter = textTrimmed.charAt(i);
    }

function countSignsWithoutSpaces(){
    const textarea = document.querySelector('textarea');
    const text = textarea.value;
    let letterCounter = 0
    const textTrimmed = text.trim()
    


    for (let i = 0; i <textTrimmed.lenght; i++) {
        const letter = textTrimmed.charAt(i);

        if (letter !== ' ') {
            lettercounter += 1
            console.log(letterCounter)
        }
    }
}
    const readCharacterPerMinute = 200

    const minutes = letterCounter / readCharacterPerMinute
    console.log(minutes)

    const seconds = minutes * 60
    console.log(seconds)

    document.getElementById("read-time").innerText = seconds


}
