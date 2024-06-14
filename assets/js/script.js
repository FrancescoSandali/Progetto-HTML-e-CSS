function sendMail(){
    var params = {
        name: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("oggetto").value,
        message: document.getElementById("text").value,
    }
    emailjs.send("service_l3a60gj","template_ocj810g",params).then(alert("Email inviata con successo!!"));
}
