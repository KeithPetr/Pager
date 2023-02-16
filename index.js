const numbersGridEl = document.getElementById("numbers-grid");
const senderMessageEl = document.getElementById("sender-message")
const receivedMessageEl = document.getElementById("pager-received-message")
const resetBtn = document.getElementById("reset-btn");
const sendBtn = document.getElementById("send-btn");
let maxCharacters = 0
sendBtn.disabled = true
resetBtn.disabled = true


numbersGridEl.addEventListener("click", function(e){
    if (e.target.dataset.input && maxCharacters < 12) {
        senderMessageEl.innerHTML += e.target.dataset.input
        maxCharacters++
        sendBtn.disabled = false
        resetBtn.disabled = false
        resetBtn.style.color= "#f8f8f8"
        // console.log(maxCharacters)
    }
})

function sendMessage() {
    receivedMessageEl.innerHTML = senderMessageEl.innerHTML
    const audio = new Audio("sound/Notification.mp3");
    audio.play();
}

function resetMessage() {
    receivedMessageEl.innerHTML = ""
    senderMessageEl.innerHTML = ""
    maxCharacters = 0
    const numberPad = document.querySelector('.numbers-grid')
    numberPad.setAttribute('style', 'pointer-events: auto')
    resetBtn.disabled = false
    resetBtn.style.color = "#f8f8f8"
}

sendBtn.addEventListener("click", function() {
    setTimeout(sendMessage, 2000)
    setTimeout(resetMessage, 8000)
    sendBtn.disabled = true
    resetBtn.disabled = true
    resetBtn.style.color = "grey"
    const numberPad = document.querySelector('.numbers-grid')
    numberPad.setAttribute('style', 'pointer-events: none')
    numbersGridEl.style.color = "grey"
})
resetBtn.addEventListener("click", resetMessage)