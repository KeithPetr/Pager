const numbersGridEl = document.getElementById("numbers-grid");
const senderMessageEl = document.getElementById("sender-message")
const receivedMessageEl = document.getElementById("pager-received-message")
const resetBtn = document.getElementById("reset-btn");
const sendBtn = document.getElementById("send-btn");

numbersGridEl.addEventListener("click", function(e){
    console.log(e.target)
    if (e.target.dataset.input) {
        senderMessageEl.innerHTML += e.target.dataset.input
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
}

sendBtn.addEventListener("click", function() {
    setTimeout(sendMessage, 2000)
    setTimeout(resetMessage, 10000)
})
resetBtn.addEventListener("click", resetMessage)