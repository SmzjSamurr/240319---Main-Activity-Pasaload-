document.getElementById("transferButton").addEventListener("click", function() {
    var sender = document.getElementById("sender").value;
    var recipient = document.getElementById("recipient").value;
    var amount = document.getElementById("amount").value;

    if (sender === "" || recipient === "" || amount === "") {
        alert("Please fill in all fields.");
        
        return;
    }

    alert("Pasaload Successful!");
});


