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
}

function resetMessage() {
    receivedMessageEl.innerHTML = ""
    senderMessageEl.innerHTML = ""
}

sendBtn.addEventListener("click", sendMessage)
resetBtn.addEventListener("click", resetMessage)